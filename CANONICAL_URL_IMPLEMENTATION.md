# Canonical URL Implementation Guide

## ✅ Canonical URLs Implemented

### **Problem Solved:**
- ✅ Every page now has a canonical URL
- ✅ Prevents duplicate content issues
- ✅ Improves SEO rankings
- ✅ Helps search engines understand the preferred URL

## 🔧 Implementation Methods

### **1. Metadata API (Server-Side) - Primary Method**
Next.js automatically renders canonical URLs from metadata:

```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.cmdcybr.com.au/page-url',
  },
}
```

**Pages with Metadata Canonical URLs:**
- ✅ Home page (`/`)
- ✅ Company page (`/company`)
- ✅ Contact page (`/contact`)

### **2. Layout Files (Section-Level)**
Created layout files for main sections:
- ✅ `/services/layout.tsx`
- ✅ `/what-we-do/layout.tsx`
- ✅ `/resources/layout.tsx`
- ✅ `/partners/layout.tsx`
- ✅ `/how-we-do-it/layout.tsx`
- ✅ `/contact/layout.tsx`

### **3. CanonicalURL Component (Client-Side Fallback)**
Dynamic component that adds canonical URLs for pages without metadata:

**Features:**
- Automatically detects current pathname
- Generates correct canonical URL
- Updates existing canonical if present
- Works as fallback for client components

**Location:** `src/components/CanonicalURL.tsx`

## 📋 Canonical URL Format

All canonical URLs follow this format:
```
https://www.cmdcybr.com.au{pathname}
```

**Examples:**
- Home: `https://www.cmdcybr.com.au`
- Contact: `https://www.cmdcybr.com.au/contact`
- Services: `https://www.cmdcybr.com.au/services`
- Company: `https://www.cmdcybr.com.au/company`

## 🎯 How It Works

### **For Server Components:**
1. Metadata with `alternates.canonical` is set
2. Next.js automatically renders `<link rel="canonical">` in `<head>`
3. Search engines see canonical URL immediately

### **For Client Components:**
1. CanonicalURL component runs on client-side
2. Detects current pathname using `usePathname()`
3. Adds/updates canonical link in document head
4. Works as fallback if metadata isn't available

## ✅ Verification

### **Check Canonical URLs:**
1. **View Page Source:**
   - Right-click → View Page Source
   - Search for `<link rel="canonical"`
   - Should see: `<link rel="canonical" href="https://www.cmdcybr.com.au/...">`

2. **Browser DevTools:**
   - Open DevTools (F12)
   - Go to Elements/Inspector
   - Check `<head>` section
   - Look for canonical link tag

3. **SEO Tools:**
   - Google Search Console
   - SEO checker tools
   - Should detect canonical URLs

## 📝 Best Practices Followed

1. ✅ **Consistent Format**: All URLs use `https://www.cmdcybr.com.au`
2. ✅ **No Trailing Slashes**: URLs are normalized (except root)
3. ✅ **HTTPS Only**: All canonical URLs use HTTPS
4. ✅ **WWW Subdomain**: Consistent use of www subdomain
5. ✅ **Unique Per Page**: Each page has its own canonical URL
6. ✅ **Server-Side First**: Metadata API used when possible
7. ✅ **Client-Side Fallback**: Component handles edge cases

## 🔍 Pages with Canonical URLs

### **Main Pages:**
- ✅ `/` - Home
- ✅ `/company` - About/Company
- ✅ `/contact` - Contact Us
- ✅ `/what-we-do` - Services Overview
- ✅ `/services` - Services Listing
- ✅ `/resources` - Resources
- ✅ `/partners` - Partners
- ✅ `/how-we-do-it` - Methodology

### **Sub-Pages:**
All sub-pages automatically get canonical URLs via:
- CanonicalURL component (dynamic)
- Or page-specific metadata (when available)

## 🚀 SEO Benefits

1. **Prevents Duplicate Content:**
   - Search engines know which URL is preferred
   - Avoids ranking penalties

2. **Consolidates Page Authority:**
   - Multiple URLs pointing to same content
   - Canonical tells search engines which to index

3. **Improves Rankings:**
   - Better signal to search engines
   - Clearer site structure

4. **Better Crawling:**
   - Search engines understand site structure
   - More efficient indexing

## 🛠️ Maintenance

### **Adding Canonical to New Pages:**

**Option 1: Server Component (Recommended)**
```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.cmdcybr.com.au/your-page',
  },
}
```

**Option 2: Layout File**
Create `layout.tsx` in the route folder with metadata.

**Option 3: Automatic (Fallback)**
CanonicalURL component will automatically add it.

## 📊 Current Status

- ✅ Root layout has base canonical URL
- ✅ Key pages have metadata canonical URLs
- ✅ Section layouts created for main routes
- ✅ Dynamic component handles all other pages
- ✅ All pages now have canonical URLs

## 🔗 Related Files

- `src/app/layout.tsx` - Root layout with base configuration
- `src/components/CanonicalURL.tsx` - Dynamic canonical component
- `src/app/*/layout.tsx` - Section-specific layouts
- `src/app/*/page.tsx` - Individual page metadata

## ✅ Verification Checklist

- [x] Home page has canonical URL
- [x] Contact page has canonical URL
- [x] Company page has canonical URL
- [x] All main sections have layout files
- [x] CanonicalURL component is active
- [x] URLs use correct format (https://www.cmdcybr.com.au)
- [x] No duplicate canonical URLs
- [x] All pages covered

