const Foot = {
  template: `
      <footer>
          <div class="foot-nav-wrapper">
              <ul>
                  <li v-for="link in footLinks">
                      <router-link class="foot-link" :to="link.to" exact>{{ link.text }}</router-link>
                  </li>
              </ul>
          </div>
      </footer>
  `,
  data() {
      return {
          footLinks: [
            { text: 'Home', to: '/' },
            { text: 'About', to: '/about' },
            { text: 'Contact', to: '/contact' },
          ]
      };
  }
};

export default Foot;
