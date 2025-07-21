import * as fs from "fs"                    
import * as path from "path"                
import fetch from "node-fetch"              

import dotenv from "dotenv";                 
dotenv.config();                             

// Base URL for the Strapi API, loaded from environment variables
const STRAPI_API_URL = process.env.BASE_URL;

// Output directory where images will be saved, loaded from environment variables
const IMAGES_OUTPUT_DIR = path.join(process.env.IMAGES_OUTPUT_PATH);

async function downloadImages() {
  // Ensure the output directory exists. If not, create it recursively.
  if (!fs.existsSync(IMAGES_OUTPUT_DIR)) {
    fs.mkdirSync(IMAGES_OUTPUT_DIR, { recursive: true });
  }

  try {
    // Fetch the list of uploaded files from Strapi
    const response = await fetch(`${STRAPI_API_URL}/api/upload/files`, {
      headers: {
        "Content-Type": "application/json",          
        "Access-Control-Allow-Origin": "*",         
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_KEY}`, // Use the Bearer token for authorization
      }
    });
    
    const data = await response.json();             // Parse the response JSON

    // Check if there are images in the response
    if (data && data.length) {
      for (const image of data) {
        // Construct the full URL for the image
        const imageUrl = `${STRAPI_API_URL}${image.url}`;
        
        // Determine the output path for the image
        const imagePath = path.join(IMAGES_OUTPUT_DIR, path.basename(image.url));
        
        // Fetch the image data from the URL
        const imageResponse = await fetch(imageUrl);
        const buffer = await imageResponse.buffer(); // Convert the response to a buffer
        
        // Write the image buffer to the output directory
        fs.writeFileSync(imagePath, buffer);
        console.log(`Downloaded: ${imagePath}`);
      }
    } else {
      // Log if no images were found in the response
      console.log("No images found.");
    }
  } catch (error) {
    // Log any errors that occur during the download process
    console.error("Error downloading images:", error);
  }
}

downloadImages();
