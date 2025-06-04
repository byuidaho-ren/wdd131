const products = [
    { id: "wd-0001", name: "Web Design", avg_rating: 4.5 },
    { id: "wp-0002", name: "Web Development", avg_rating: 4.7 },
    { id: "dd-0003", name: "Desktop App Development", avg_rating: 3.5 },
    { id: "md-0004", name: "Mobile App Development", avg_rating: 3.9 },
    { id: "cd-0005", name: "Cloud Application CRM", avg_rating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {

    const productSelect = document.getElementById("productName");
    
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    if (localStorage.getItem("reviewCount") === null) {
        localStorage.setItem("reviewCount", 0);
    }

    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});

if (window.location.pathname.includes("review.html")) {
    
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);

    document.body.innerHTML = `
        <div class="container">
            <h1>Thank you for your review!</h1>
            <p>You have submitted ${reviewCount} reviews.</p>
            <a href="form.html">Submit another review</a>
        </div>
    `;
}