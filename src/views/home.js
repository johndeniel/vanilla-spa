import '../components/navigation.js'
import '../components/contact.js'
import '../components/swipe.js'

// Function to render the home page content
const renderHome = {
  render: async () => {
    return /*html*/ ` 
      <div class="container">
        <aside class="left-aside">
          <side-navigation></side-navigation>
        </aside>

        <main class="main-content">
          <swipe-item> </swipe-item>
        </main>

        <aside class="right-aside">
          <contact-list></contact-list>
        </aside> 
      </div>
    `
  },
}

export default renderHome