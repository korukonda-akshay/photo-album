# 💍 Sanjay & Ananya — Wedding Gallery

A beautiful, production-ready wedding photo gallery built with **Next.js 14**, **Firebase**, and **Tailwind CSS**.

---

## ✨ Features

- 🖼 **5 event galleries** — Engagement, Haldi, Mehendi, Wedding, Reception
- 📤 **Drag-and-drop photo upload** with real-time progress bars
- 🔍 **Full-screen lightbox** with swipe/arrow navigation
- 🔐 **Password-protected admin panel** to upload & delete photos
- 📱 **Fully responsive** — looks great on mobile and desktop
- ⚡ **Masonry grid layout** (Pinterest style)
- 🌐 **Deployable to Vercel** for free in one command

---

## 🚀 Quick Start

### 1. Clone / unzip the project

```bash
cd wedding-gallery
npm install
```

### 2. Create a Firebase project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add Project** → name it (e.g. `sanjay-ananya-gallery`) → Continue
3. **Enable Firestore:**
   - Go to **Firestore Database** → Create database → Start in **test mode**
4. **Enable Storage:**
   - Go to **Storage** → Get started → Start in **test mode**
5. **Get your config:**
   - Go to **Project Settings** → scroll to **Your Apps** → Add Web App
   - Copy the `firebaseConfig` values

### 3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your Firebase values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123

NEXT_PUBLIC_ADMIN_PASSWORD=sanjay2025
```

> Change `NEXT_PUBLIC_ADMIN_PASSWORD` to whatever password you want!

### 4. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📤 How to Upload Photos

1. Go to your site → click **Admin** (top right)
2. Enter your admin password
3. You'll be taken to the Admin panel
4. **Select an event** from the left sidebar (e.g. Haldi)
5. **Drag & drop** photos or click to browse
6. Add optional captions to each photo
7. Click **Upload Photos** — progress bars show in real time
8. Photos appear instantly in the public gallery!

---

## 🌍 Deploy to Vercel (Free)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Then add your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

Your gallery will be live at `https://your-project.vercel.app` ✨

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage — shows all 5 events
│   ├── HomepageClient.tsx    # Client component for homepage
│   ├── event/[id]/page.tsx   # Event gallery page (masonry grid + lightbox)
│   ├── admin/page.tsx        # Admin dashboard
│   ├── layout.tsx            # Root layout with providers
│   └── globals.css           # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx            # Sticky nav with admin login modal
│   ├── EventCard.tsx         # Homepage event card
│   └── PhotoUploader.tsx     # Drag-and-drop uploader with progress
└── lib/
    ├── firebase.ts           # Firebase config + all DB/storage helpers
    └── adminAuth.tsx         # Admin session context
```

---

## 🔐 Security Notes

- Admin access is protected by a password stored in `.env.local`
- The password is checked client-side — fine for a personal gallery
- For stronger security, enable Firebase Authentication and restrict Firestore/Storage rules

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Database | Firebase Firestore |
| Storage | Firebase Storage |
| Lightbox | react-photo-view |
| Upload | react-dropzone |
| Toasts | react-hot-toast |
| Animations | Framer Motion |
| Deployment | Vercel |

---

## 📝 Customisation

### Change couple name / dates
Edit `src/app/layout.tsx` (metadata) and `src/app/HomepageClient.tsx` (hero section).

### Change event names or dates
Edit `DEFAULT_EVENTS` in `src/lib/firebase.ts`. Delete your Firestore `events` collection to re-seed.

### Change admin password
Update `NEXT_PUBLIC_ADMIN_PASSWORD` in `.env.local`.

---

Made with ♥ for Sanjay & Ananya's wedding
