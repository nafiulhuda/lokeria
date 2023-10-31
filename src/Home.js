import { Link } from "react-router-dom"
const Home = () => {
    return (
        <>
            <section class="hero" id="home">
                <main class="content">
                    <h1>We help you to find your <span>Dream Job</span></h1>
                    <p>DreamJob is the worldwide leader on insights about jobs and companies. Search millions of jobs and get the inside scoop on companies with employee reviews, personalized salary tools, and more. Hiring? Post a job for free.</p>
                    <Link className="cta" to="/vacancy">Open Vacancy</Link>
                </main>
            </section>
        </>
    )
}

export default Home