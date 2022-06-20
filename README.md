# ABN interview 🔰

## Stack
- using Nuxt3 because it should be the default for new apps nowadays (Vue3 being the default since February 2022)
- using Windi because atomic CSS is cool and performant
- ESlint + Prettier were added for code quality + formatting
- I've added [unplugin-icons](https://github.com/antfu/unplugin-icons) because this is probably the best library for icons overall
- could be hosted easily on Heroku (SSR)

## Requirements + notes
- [x] use any framework of choice: using Nuxt3
- [x] application must be responsive: we're in 2022 so ofc it is
- [x] limit the amount of scaffolding/libraries etc: this is also how I work usually so libraries are kept to a healthy minimum
- [x] have a README: mandatory nowadays too ✅
- [x] make sure that UI is simple yet eye-catching
- [ ] includes unit tests: didn't get the time to write them because of the work on the API
- [ ] more features included: got a lot of ideas but focused mainly on an MVP
- [x] usage of [TVmaze](http://www.tvmaze.com/api) is required
- [x] display few popular TV shows (based on rating + genre), preferably horizontal scroll with drama, comedy, sports etc...
- [x] show the details of the TV show upon user click
- [x] search feature is also asked (get the details of the show): would have liked to add some debounce here.

## Data massage'ing
The TVmaze API [does not provide genre filtering](https://www.tvmaze.com/threads/5165/filter-the-data). Hence I needed to do most of the work myself here.

Genre chosen: Romance, Drama, Action, Comedy and Family

## How to run the project
- run the latest LTS of Node (v16+)
- `yarn && yarn build && node .output/server/index.mjs` to run the project
