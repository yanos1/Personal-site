import React, { useEffect } from 'react'
import Quote from './Quote'
import axios from 'axios';


function Wall() {

    let myHeaders = new Headers();
    myHeaders.append("apikey", "taztyffrJnEG6kZw9UyD3GYntvCFJ7HO");
    let url = "http://localhost:3012/post"  //the server side url
    const [userIp, setUserIP] = React.useState("")
    const [showForm, setShowForm] = React.useState(false)
    const [all_quotes, setAllQuotes] = React.useState([]); // Initialize with an empty array
    const [formData, setFormData] = React.useState({
        "quote": '',
        "font": 'Arial',
        "fontColor": 'wheat',
        "xPosition": null,
        "yPosition": null,
        "rotation": null,
        "firstName": '',
        "lastName": '',
        "ip": ''

    });



    async function initData() {
        let resp = await axios.get(url);
        return resp.data
    }

    function isOffensiveContent(formData) {
        let raw = `${formData.quote} ${formData.firstName} ${formData.lastName}`
        let requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: myHeaders,
            body: raw
        };


        fetch("https://api.apilayer.com/bad_words?censor_character={censor_character}", requestOptions)
            .then(response => response.json())
            .then(result => {

                if (result.bad_words_total != 0) {
                    alert("You can't post offensive content here !");
                    return true;
                }
            })
            .catch(error => console.log('error', error));
        return false
    }


    function isEligibleForPost(userIp) {
        let count = 0
        for (let quote of all_quotes) {
            if (quote.ip === userIp) {
                // console.log(quote.ip, userIp)
                count++
            }
            if (count == 3) {
                return false
            }
        }
        return true
    }

    async function sendData(url, formData) {
        await axios(
            {
                url: url,
                method: "POST",
                data: formData
            }
        )
    }


    React.useEffect(() => {
        async function fetchData() {
            try {
                const data = await initData();
                setAllQuotes(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);


    const components = all_quotes.map(function (post) {
        return <Quote
            key={post._id}
            text={post.quote}
            style={{
                color: post.fontColor,
                border: `2px solid ${post.fontColor}`,
                font: post.font,
                left: `${post.xPosition}%`,
                top: `${post.yPosition}%`,
                transform: `rotate(${post.rotation}deg)`
            }}
            userName={`${post.firstName} ${post.lastName}`}
            date={post.dateCreated.slice(0, 10)}

        />
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value.replace("\n", " ") });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isEligibleForPost(userIp)) {
            alert("You have already posted 3 times - it's the maximum for now.")
            return;
        }
        let offensive = isOffensiveContent(formData);
        if (offensive) {
            return;
        }

        sendData(url, formData)
        window.location.reload()

    };

    useEffect(() => {
        async function getUserIP() {
            const response = await fetch("https://ipinfo.io?token=9bafcd1bb91f26");
            const data = await response.json();
            setUserIP(data.ip)
            console.log("IP:", userIp);
        }
        const fetchData = async () => {
            setFormData((prevState) => ({
                ...prevState,
                ip: userIp,
                rotation: Math.floor((Math.random() - 0.5) * 75),
                xPosition: Math.random() * 85,
                yPosition: Math.random() * 140 + 5
            }));
        }
        fetchData()
        getUserIP()
    }, [showForm]);


    const toggleForm = () => {
        setShowForm(() => !showForm)
    }

    return (
        <div>
            {!showForm && <button className='open--form--button' onClick={toggleForm}>+ Add</button>}
            {showForm && <div className='form--container'>
                <div className='form--header'>
                    <h2 className='form--title'>Leave a note !</h2>
                    <button id="closeForm" onClick={toggleForm}>X</button>
                </div>
                <h4 className='form--sub--title'>Could be a quote, a funfact, a wish, a funfact, a recipie for falafel...</h4>
                <h4 className='form--restrictions'>p.s: The content will be checked and posting is irreversible by the user. </h4>


                <form onSubmit={handleSubmit} className='form'>
                    <label htmlFor="quote">Context (required) :</label>
                    <textarea
                        id="quote"
                        name="quote"
                        value={formData.quote}
                        onChange={handleChange}
                        required
                        maxLength={120}
                    />

                    <label htmlFor="font">Font:</label>
                    <select
                        id="font"
                        name="font"
                        value={formData.font}
                        onChange={handleChange}
                    >
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Verdana">Verdana</option>
                    </select>

                    <label htmlFor="fontColor">Font Color (required):</label>
                    <input
                        type="color"
                        id="fontColor"
                        name="fontColor"
                        value={formData.fontColor}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="firstName">First Name (required):</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        maxLength={15}
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        maxLength={15}
                    />


                    <button type="submit">Submit</button>
                </form>
                {showForm && <Quote key="-1" text={formData.quote} style={{
                    border: `2px solid ${formData.fontColor}`,
                    color: formData.fontColor,
                    fontFamily: formData.font,
                    position: "relative",
                    margin: "auto",
                    width: "90%"

                }}
                    userName={`${formData.firstName} ${formData.lastName}`}
                    date="12/34/5678" />}

            </div>}
            {!showForm && components}
        </div>
    );
}


export default Wall
