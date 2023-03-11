// Get the current date
const now = new Date();

// Get the current day of the week (0-6)
const dayOfWeek = now.getDay();

// Get the reference to the image element
const image = document.getElementById("my-image");
const image2 = document.getElementById("my-image2");
const image3 = document.getElementById("my-image3");
const image4 = document.getElementById("my-image4");
const image5 = document.getElementById("my-image5");
const image6 = document.getElementById("my-image6");

// Set the image source based on the day of the week
if (dayOfWeek >= 1 && dayOfWeek <= 4) {
  // Weekday (Monday-Friday)
  image.src = "/images/weekday/weekday1.jpg";
  image2.src = "/images/weekday/weekday2.jpg";
  image3.src = "/images/weekday/weekday3.jpg";
  image4.src = "/images/weekday/weekday4.jpg";
  image5.src = "/images/weekday/weekday5.jpg";
  image6.src = "/images/weekday/weekday6.jpg";
} else {
  // Weekend (Saturday-Sunday)
  image.src = "/images/weekend/weekend1.jpg";
  image2.src = "/images/weekend/weekend2.jpg";
  image3.src = "/images/weekend/weekend3.jpg";
  image4.src = "/images/weekend/weekend4.jpg";
  image5.src = "/images/weekend/weekend5.jpg";
  image6.src = "/images/weekend/weekend6.jpg";
}
