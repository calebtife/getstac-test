## GetSTAC Dashboard

Next.js (App Router) dashboard prototype for GetSTAC merchants. Includes custom layout, greeting card, stat widgets, chart, quick actions, and responsive data table.

### Setup
1. Install dependencies  
   ```bash
   npm install
   ```
2. Start the dev server  
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000`. Primary screen lives at `/login`, `/dashboard`, `/dashboard/locations`

### Decisions & Trade-offs
- **Mobile-first layout:** Components use single-column defaults with progressive enhancements (grid/flex breakpoints) to preserve the desktop design while keeping small screens usable. Some tables require horizontal scroll as a trade-off to keep parity with the Figma layout.
- **Shared greeting + layout props:** Greeting text comes from `GreetingCard` to avoid duplication. The layout accepts nav/support config so other routes can reuse the same shell without editing the layout component.
- **Account manager popup:** Implemented as a controlled popover tied to the “Escalate an Issue” button. Chose a simple in-DOM card instead of a full modal to keep context visible; outside click closes it.
- **Static data:** Stats, chart, and locations use mock data for now. Keeping them inline makes iteration fast; swap with API hooks once endpoints are ready.
- **Asset usage:** Profile photo and icons are local assets/react-icons, avoiding Next Image optimization for simplicity. Update to `next/image` if performance budgets require it. 
