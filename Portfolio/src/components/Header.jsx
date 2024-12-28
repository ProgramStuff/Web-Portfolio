import '../assets/styles/Header.css'
import ResponsiveAppBar from './ResponsiveAppBar'


export default function Header() {
    return (
        <div class="top-container">
            <img class="circle" src="/images/circle.png" alt="purple circle" />
            <h1 id="title">Jordan Kelsey</h1>
            <h2 id="about-me">Software Developer</h2>
            <p id="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus arcu bibendum at varius. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus.</p>
            <img class="crescent2" src="/images/crescent.png" alt="purple crescent" />
            <img class="sky" src="/images/sky.webp" alt="purple sky" />
            <img class="myself" src="/images/me.jpg" alt="photo of myself" />
            <img id="blurred" src="/images/purple-glow.png" alt="background blur" />
            <ResponsiveAppBar />
            {/* <nav class="navbar navbar-expand-lg bg-transparent text-reset">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            </div>
            )
}