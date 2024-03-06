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
            { text: 'Home', to: '/vue-spa/' },
            { text: 'About', to: '/vue-spa/about' },
            { text: 'Contact', to: '/vue-spa/contact' },
          ]
      };
  }
};

export default Foot;
