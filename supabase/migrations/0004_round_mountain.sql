/*
  # Update broken image URLs

  1. Changes
    - Update image URLs for dishes with broken or non-loading images
    - Replace with high-quality, relevant Unsplash images
*/

-- Update Apple Tart with a better image
UPDATE dishes 
SET image_url = 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13'
WHERE name = 'Apple Tart';

-- Update Beef Wellington with a more appropriate image
UPDATE dishes 
SET image_url = 'https://images.unsplash.com/photo-1662459579949-9e35ce69e3a2'
WHERE name = 'Beef Wellington';

-- Update Lobster Thermidor with a better seafood image
UPDATE dishes 
SET image_url = 'https://images.unsplash.com/photo-1599486761526-2d2d1aee4d3b'
WHERE name = 'Lobster Thermidor';

-- Update Osso Buco with a better braised meat image
UPDATE dishes 
SET image_url = 'https://images.unsplash.com/photo-1544025162-d76694265947'
WHERE name = 'Osso Buco';

-- Update Duck Confit with a better duck dish image
UPDATE dishes 
SET image_url = 'https://images.unsplash.com/photo-1619860705243-46012fc41ac7'
WHERE name = 'Duck Confit';