const ImageLinkConverter = require('./skills/image-link-converter.js');

const converter = new ImageLinkConverter();
const filePath = './zenith/featured-app/connector/subscription-app-connector.md';

try {
  console.log(`Converting images in ${filePath}...`);
  converter.convertFile(filePath);
  console.log('Conversion completed successfully!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}