import React from 'react'
import Project from './Project'

export default function Projects() {
    return (
        <div>
            <Project
                video="BurkAdventures.mp4"
                name="Adventure game"
                date="August 2021"
                technologies="Python, Pygame"
                description=" Before i studied computer science i decided to get to know the programming world by creating this mini-game,
             after which i knew i was going to study this field"
                funFact="Disclaimer: if you wish to look at this code, please consult an eye doctor first, it may cause eye pain."
            />
            <Project
                video="Pong.mp4"
                name="Pong with intergrated AI opponent"
                date="March 2023"
                technologies="Python, Neat (genetic algorithm package)"
                description="AI is a fascinating field. I wanted to know a little more about it so i created this game. there are 3 newral networks each representing a game mode."
                funFact="Fun Fact - The impossible mode network was trained for over 400 generations (for comparison - hard was 25, easy was 5). You can't even score 1 point against it."
            />

            <Project
                video="Website.mp4"
                name="This website"
                date="October 2023"
                technologies="React, JavaScript, Html & CSS"
                description="I took my time to study some web development between semesters, and decided to create this site to exercise the skills i acquired"
                funFact=""
            />

        </div>
    )
}
