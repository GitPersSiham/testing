grand-paris-express/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── ligne/[id]/
│   │   │   └── page.tsx
│   │   └── gare/[id]/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── BackButton.tsx
│   │   ├── ligne/
│   │   │   ├── LigneCard.tsx
│   │   │   ├── LigneList.tsx
│   │   │   └── StationList.tsx
│   │   ├── gare/
│   │   │   ├── GareInfo.tsx
│   │   │   └── ItineraireForm.tsx
│   │   └── common/
│   │       ├── MetroIcon.tsx
│   │       └── Lignebadge.tsx
│   ├── theme/
│   │   └── theme.ts
│   ├── data/
│   │   ├── lignes.ts
│   │   └── gares.ts
│   └── types/
│       └── index.ts
├── public/
│   └── images/
├── package.json
├── tsconfig.json
└── next.config.js
