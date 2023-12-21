const Navbar = {
    template: `
        <nav>
            <div class="top-nav-wrapper">
                <div class="home-button">
                    <router-link :to="{ path: '/' }"><img src="media/home.gif" alt="Home"></router-link>
                </div>
                <ul>
                    <li v-for="link in navLinks">
                        <router-link class="top-nav-link" :to="link.to" exact>{{ link.text }}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    `,
    data() {
        return {
            navLinks: [
                { text: 'About', to: '/about' },
                { text: 'Contact', to: '/contact' },
            ]
        };
    }
};

export default Navbar;
