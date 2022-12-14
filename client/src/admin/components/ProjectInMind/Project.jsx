import React from 'react'
import project from '../../assets/img/project.png';

function Project() {
    return (
        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">You have a new project</h2>
                        <div className="project__description">Contact me now and get a 30% discount on your new project.</div>
                        <a href="#/contact" className="button button--flex button--white">
                            Contact Me
                            <i className="uil uil-message project__icon button__icon"></i>
                        </a>
                    </div>
                    <img src={project} alt="" className="project__img" />
                </div>
            </div>
        </section>
    )
}

export default Project
;