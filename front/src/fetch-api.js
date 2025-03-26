async function setupFetch(keywordInput, divResult) {
	const xhr = new XMLHttpRequest();
	const keyword = keywordInput.value.trim();

	if (keyword == "") {
		divResult.innerHTML = "invalid keyword";
		return;
	}

	console.log(encodeURIComponent(keyword));
	xhr.onload = function () {
		if (xhr.status === 200) {
			const resArrInfo = JSON.parse(xhr.responseText);
			divResult.innerHTML = "";
			resArrInfo.map(info => {
				divResult.innerHTML +=
				`
				<div class="product-info">
					<div class="img-container" >
						<img src="${info.imgSrc}" alt="img url: ${info.imgSrc}" />
					</div>
					<div>
						<h3>${info.title}</h3>
						<p><span class="stat-title">Rating:</span> ${info.rating} </p>
						<p><span class="stat-title">Number of reviews: </span>${info.numReviews}</p>
					</div>
				</div>
				<hr>
				`
			});
		} else {
			divResult.innerHTML = xhr.responseText;
		}
	};
	xhr.onerror = function () {
		console.error("Network error occurred");
		divResult.innerHTML = "Network error occurred";
	};
	xhr.open(
		"GET",
		`http://localhost:8080/api/scrape?keyword=${encodeURIComponent(keyword)}`,
		true
	);

	xhr.send();
}

export default setupFetch;
