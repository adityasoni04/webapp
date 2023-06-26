import React from 'react'
import Sidebar from '../components/Sidebar'

const Guide = () => {
    const guideData = [
        {
            id: 1,
            title: 'Simplicity',
            guidelines: [
                " Colors: Basically, don't use a lot. The Handbook of Computer-Human Interaction recommends using a maximum of five (plus or minus two) different colors in your design",
                "Typefaces: The typefaces you choose should be highly legible, so nothing too artsy and very minimal script fonts, if any. For text color, again",
                "Graphics: Only use graphics if they help a user complete a task or perform a specific function (don't just add graphics willy-nilly)",
            ],
        },
        {
            id: 2,
            title: 'Visual Hierarchy',
            guidelines: [
                " Closely tied to the principle of simplicity, visual hierarchy means arranging and organizing website elements so that visitors naturally gravitate toward the most important elements first",
                "Remember, when it comes to optimizing for usability and UX, the goal is to lead visitors to complete a desired action, but in a way that feels natural and enjoyable. By adjusting the position, color, or size of certain elements",
            ],
        },
        {
            id: 3,
            title: 'Navigability',
            guidelines: [
                "Here are a few tips for optimizing your site's navigation",
                "Keep the structure of your primary navigation simple",
                "Include navigation in the footer of your sit",
                "Consider using breadcrumbs on every page (except your homepage) so users remember their navigation trail",
                "Include a search bar near the top of your site so visitors can search by keywords",
            ],
        },
    ];


    return (
        <div className='content'>
            <Sidebar />
            <div className="g">
                <div className="guide">
                    <h1>Guide Page</h1>
                    {guideData.map((section) => (
                        <div key={section.id} className="guide-section">
                            <h3>{section.title}</h3>
                            <ul>
                                {section.guidelines.map((guideline, index) => (
                                    <li key={index}>{guideline}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Guide
