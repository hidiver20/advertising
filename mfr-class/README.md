# Myofascial Release Class

Landing page, flyer QR codes, and social posts for the **Weekly Self-Massage Class: Myofascial Release** with Carolyn Silan, PT.

- **When:** Tuesdays, 4:15 to 5:15 PM (Hawaiʻi time)
- **Where:** Waikoloa Community Church, 68-3621 Paniolo Ave, Waikoloa Village
- **Price:** $15 a session, or 4 classes for $40

Class details come from the flyer in Canva (design "Seminar flyers," page 31) and the live Acuity booking pages, checked November 16, 2026.

## What's here

| File | What it is |
|---|---|
| [index.html](index.html) | The landing page: booking buttons, a "next class" notice, and a month-by-month class calendar |
| [schedule.js](schedule.js) | **The file you edit** to cancel a class, add a make-up class, or post an announcement |
| [qr/](qr/) | QR codes for flyers (PNG and SVG) |
| [social-media-posts.md](social-media-posts.md) | 7 ready-to-post captions |
| [images/](images/) | Logo mark (from the master .ai logo file), plus the tools photo and headshot cropped from the Canva flyer |

## QR codes for flyers

| QR code | Opens | PNG | SVG |
|---|---|---|---|
| Single class, $15 | https://TherapeuticConnection.as.me/1MFRclass | [mfr-single-class-qr.png](qr/mfr-single-class-qr.png) | [mfr-single-class-qr.svg](qr/mfr-single-class-qr.svg) |
| 4 classes, $40 | https://TherapeuticConnection.as.me/4MFRclasses440 | [mfr-4-class-pass-qr.png](qr/mfr-4-class-pass-qr.png) | [mfr-4-class-pass-qr.svg](qr/mfr-4-class-pass-qr.svg) |

- Plain black on white with a quiet border, built with error correction level Q, which can restore about 25% of the code ([Denso Wave, inventor of the QR code](https://www.qrcode.com/en/about/error_correction.html)), so a scuffed flyer still scans.
- **For Canva:** upload the PNG (1,640 and 1,800 pixels square, crisp at any flyer size). The SVG is a vector version for print shops.
- Both codes were test-scanned after generating and open the exact links above.

## Updating the calendar

Everything the calendar shows comes from [schedule.js](schedule.js). The instructions are at the top of that file. The short version:

**Cancel a class** by adding a line inside `cancellations`:

```js
{ date: "2026-12-22", reason: "Holiday break" },
```

**Add a one-time extra class** inside `extraClasses`:

```js
{ date: "2026-12-23", time: "4:15 to 5:15 PM", note: "Make-up class" },
```

**Plan further ahead** by moving `plannedThrough` forward. Tuesdays after that date stay blank on the calendar, so nobody mistakes an unplanned week for a confirmed class. It's set to December 31, 2026 right now.

**Post a short announcement** above the calendar by typing it into `announcement`. It currently says the calendar is planned through the end of 2026.

Then change `lastUpdated` to today's date. The page shows that date so visitors know the calendar is current.

**Editing on GitHub from a phone or computer:** open `mfr-class/schedule.js` on github.com, tap the pencil icon, make the change, and tap **Commit changes**. If the page is on GitHub Pages, it refreshes within a minute or two. You can also just ask Claude to add the dates.

**Tip:** Block cancelled Tuesdays in Acuity as well, so nobody books a class that isn't happening. (As of November 16, 2026, Acuity lists bookable classes through December 15.)

**Preview a future date:** add `?date=2026-12-20` to the end of the page address to see what the page will say on that day.

## How the page decides what to show

- Every Tuesday from September 8, 2026 through `plannedThrough` is a class day unless it's listed in `cancellations`.
- The "next class" box uses Hawaiʻi time. On a class day it says "Class is on today" until 5:15 PM.
- If the coming Tuesday is cancelled, the box turns red and gives the reason and the next class date.
- Past cancellations (October 27 and November 3, from the flyer) stay visible when visitors page back through the calendar.
- Current plan: class every Tuesday through December 15, 2026, then a holiday break on December 22 and 29.

## Putting the page online

The page is plain HTML with no build step, so any web host works. Two easy options:

1. **GitHub Pages.** In the repository on github.com go to **Settings → Pages**, set **Source** to "Deploy from a branch," pick the `main` branch and the `/ (root)` folder, and click **Save** ([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)). Project sites live at `<owner>.github.io/<repository>` ([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)), so once this folder is merged to `main`, the page will be at `https://hidiver20.github.io/advertising/mfr-class/`.
2. **Your own website.** Upload the whole `mfr-class` folder (keeping `schedule.js` and `images/` next to `index.html`) and link to it from TherapeuticConnection.com.

Once you know the page address, drop it into Post 7 in [social-media-posts.md](social-media-posts.md). A third QR code pointing at the class calendar can be made at that point too.
