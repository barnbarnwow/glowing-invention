# Save Images for Project Cards

To complete the setup of your project cards with the images you provided, please follow these steps to save the images to the correct locations:

## Option 1: Download and Save Manually

1. First, make sure the folder structure exists:

   ```
   mkdir -p public/images/projects
   ```

2. Save the three images with these filenames:
   - First image (cars and motorcycles): `public/images/projects/luxury-vehicles.jpg`
   - Second image (metal texture pattern): `public/images/projects/texture-pattern.jpg`
   - Third image (bedroom design): `public/images/projects/bedroom-design.jpg`

## Option 2: Using Right-Click in Your Browser

1. Right-click on each image and select "Save Image As..."
2. Navigate to your project's `public/images/projects` folder
3. Save with the appropriate filename:
   - `luxury-vehicles.jpg` for the cars/motorcycles image
   - `texture-pattern.jpg` for the textured pattern image
   - `bedroom-design.jpg` for the bedroom design image

## Option 3: Using curl or wget (Command Line)

If you have curl or wget installed and have the image URLs, you can use:

```bash
# Create the directory first
mkdir -p public/images/projects

# Then download the images (replace URLs with actual image URLs)
curl -o public/images/projects/luxury-vehicles.jpg "IMAGE_URL_1"
curl -o public/images/projects/texture-pattern.jpg "IMAGE_URL_2"
curl -o public/images/projects/bedroom-design.jpg "IMAGE_URL_3"
```

## Option 4: Convert to Base64 (No File Saving Required)

If you prefer not to save physical files, we can convert the images to base64 and embed them directly in the code. This approach works best for smaller images. Let me know if you'd prefer this approach.

## After Saving the Images

After saving the images to the specified locations, the project cards will automatically display your images when you visit the Projects page. The paths are already configured in the code:

1. `imageData.ts` file contains the paths to the images
2. `projectsData.ts` references these image paths for each project
3. The `ProjectCard` component renders the images based on the provided paths

To verify everything is working, run your development server with `npm run dev` and navigate to the Projects page. You should see your three images displayed on the project cards.
