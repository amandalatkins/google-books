const mongoose = require("mongoose");
const Book = require("../models/Book.js");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Little Women",
    authors: "Louisa May Alcott",
    description:
      `This coming-of-age story spotlights beloved tomboy Jo March (arguably America’s first juvenile heroine and a reflection of a young Alcott herself) and Jo’s three sisters—Meg, Beth, and Amy—in a heartwarming family drama. Originally published in two parts, in 1868 and 1869, Little Women has never been out of print.`,
    image: "https://books.google.com/books/content?id=xR2jDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl",
    link: "https://books.google.com/books?id=xR2jDwAAQBAJ&num=100"
  },
  {
    title: "This is How You Lose the Time War",
    authors: "Amal El-Mohtar, Max Gladstone",
    description:
      `Two time-traveling agents from warring futures, working their way through the past, begin to exchange letters—and fall in love in this thrilling and romantic book from award-winning authors Amal El-Mohtar and Max Gladstone.

      In the ashes of a dying world, Red finds a letter marked “Burn before reading. Signed, Blue.”
      
      So begins an unlikely correspondence between two rival agents in a war that stretches through the vast reaches of time and space.
      
      Red belongs to the Agency, a post-singularity technotopia. Blue belongs to Garden, a single vast consciousness embedded in all organic matter. Their pasts are bloody and their futures mutually exclusive. They have nothing in common—save that they’re the best, and they’re alone.
      
      Now what began as a battlefield boast grows into a dangerous game, one both Red and Blue are determined to win. Because winning’s what you do in war. Isn’t it?
      
      A tour de force collaboration from two powerhouse writers that spans the whole of time and space.`,
    image: "https://books.google.com/books/content?id=0OidDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl",
    link: "https://books.google.com/books?id=0OidDwAAQBAJ"
  },
  {
    title: "Jayber Crow: A Novel",
    authors: "Wendell Berry",
    description:
      `“This is a book about Heaven,” says Jayber Crow, “but I must say too that . . . I have wondered sometimes if it would not finally turn out to be a book about Hell.” It is 1932 and he has returned to his native Port William to become the town's barber.

      Orphaned at age ten, Jayber Crow’s acquaintance with loneliness and want have made him a patient observer of the human animal, in both its goodness and frailty.
      
      He began his search as a "pre-ministerial student" at Pigeonville College. There, freedom met with new burdens and a young man needed more than a mirror to find himself. But the beginning of that finding was a short conversation with "Old Grit," his profound professor of New Testament Greek.
      "You have been given questions to which you cannot be given answers. You will have to live them out—perhaps a little at a time."
      "And how long is that going to take?"
      "I don't know. As long as you live, perhaps."
      "That could be a long time."
      "I will tell you a further mystery," he said. "It may take longer."
      
      Wendell Berry’s clear-sighted depiction of humanity’s gifts—love and loss, joy and despair—is seen though his intimate knowledge of the Port William Membership.`,
    image: "https://books.google.com/books/content?id=PfKawDrtlMoC&printsec=frontcover&img=1&zoom=1&edge=curl",
    link: "https://books.google.com/books?id=PfKawDrtlMoC"
  }
];

Book.deleteMany({})
  .then(() => Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});
