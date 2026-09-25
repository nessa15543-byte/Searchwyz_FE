const searchForm = document.getElementById("searchForm");

const searchInput = document.getElementById("caseSearch");

const statusFilter = document.getElementById("status");

const locationFilter = document.getElementById("location");

const dateFilter = document.getElementById("date");

const caseCards = document.querySelectorAll(".case-card");

const caseCount = document.getElementById("caseCount");

const noResults = document.getElementById("noResults");



function filterCases() {

    const searchText = searchInput.value
        .toLowerCase()
        .trim();


    const selectedStatus = statusFilter.value;

    const selectedLocation = locationFilter.value;

    const selectedDate = dateFilter.value;


    let visibleCases = 0;


    caseCards.forEach(function(card) {

        const name = card.dataset.name.toLowerCase();

        const location = card.dataset.location.toLowerCase();

        const status = card.dataset.status.toLowerCase();

        const date = new Date(card.dataset.date);



        const matchesSearch =
            name.includes(searchText);



        const matchesStatus =
            selectedStatus === "" ||
            status === selectedStatus;



        const matchesLocation =
            selectedLocation === "" ||
            location === selectedLocation;



        let matchesDate = true;

        const today = new Date();

        const difference =
            today - date;

        const daysAgo =
            difference / (1000 * 60 * 60 * 24);


        if (selectedDate === "week") {

            matchesDate = daysAgo <= 7;

        }


        if (selectedDate === "month") {

            matchesDate = daysAgo <= 30;

        }


        if (selectedDate === "year") {

            matchesDate = daysAgo <= 365;

        }



        const shouldShow =
            matchesSearch &&
            matchesStatus &&
            matchesLocation &&
            matchesDate;



        if (shouldShow) {

            card.style.display = "";

            visibleCases++;

        } else {

            card.style.display = "none";

        }

    });



    caseCount.textContent =
        `${visibleCases} ${
            visibleCases === 1
                ? "case"
                : "cases"
        }`;



    if (visibleCases === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}



searchForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        filterCases();

    }
);



statusFilter.addEventListener(
    "change",
    filterCases
);



locationFilter.addEventListener(
    "change",
    filterCases
);


dateFilter.addEventListener(
    "change",
    filterCases
);
