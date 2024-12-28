import '../assets/styles/Footer.css'

let year = new Date().getFullYear();

export default function Footer() {
    return(
        <footer class="footer">
            <a class="footer-link" href="https://www.linkedin.com/in/jordan-kelsey-824b00255/">LinkedIn</a>
            <a class="footer-link" href="https://github.com/ProgramStuff">GitHub</a>
            <p class="copyright">© {year} Jordan Kelsey.</p>
        </footer>
    )
}