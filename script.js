const movies = [
  
  {
    id: 1,
    title: "Robinhood",
    genres: ["Action", "Thriller"],
    rating: "PG-13",
    runtime: 120,
    releaseDate: "2023-03-27",
    director: "Venky Kudumula",
    synopsis: "Ram, a modern-day Robin Hood, is a master thief who unexpectedly finds himself switching sides. When fate forces him to become the personal security officer for Neera, a rollercoaster ride of action, comedy, and unexpected twists follows.",
    posterUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/robinhood.jpg-WQvbMd6yP7v8uup5pEnztAqQFxf9Jc.jpeg",
    backdropUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/robinhood.jpg-WQvbMd6yP7v8uup5pEnztAqQFxf9Jc.jpeg",
    showtimes: [
      { id: "st1", date: "Today", time: "10:30 AM", theater: "Theater 1", price: 12.50 },
      { id: "st2", date: "Today", time: "2:00 PM", theater: "Theater 2", price: 12.50 },
      { id: "st3", date: "Today", time: "6:30 PM", theater: "IMAX", price: 18.00 },
      { id: "st4", date: "Tomorrow", time: "11:00 AM", theater: "Theater 1", price: 12.50 },
      { id: "st5", date: "Tomorrow", time: "4:15 PM", theater: "Theater 3", price: 12.50 },
      { id: "st6", date: "Tomorrow", time: "8:45 PM", theater: "IMAX", price: 18.00 }
    ]
  },
  {
    id: 2,
    title: "Mad Square",
    genres: ["Comedy", "Drama"],
    rating: "PG",
    runtime: 110,
    releaseDate: "2023-03-27",
    director: "Kalyan Shankar",
    synopsis: "Mad Square is a Telugu movie starring Narne Nithin, Sangeeth Shobhan, Ram Nithin and Priyanka Jawalkar in prominent roles. It is written and directed by Kalyan Shankar.",
    posterUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madsquare.jpg-JbyMzpbT7w3lgmY6mMW6TvLsxstlnZ.jpeg",
    backdropUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madsquare.jpg-JbyMzpbT7w3lgmY6mMW6TvLsxstlnZ.jpeg",
    showtimes: [
      { id: "st7", date: "Today", time: "11:45 AM", theater: "Theater 3", price: 12.50 },
      { id: "st8", date: "Today", time: "3:30 PM", theater: "Theater 1", price: 12.50 },
      { id: "st9", date: "Today", time: "7:15 PM", theater: "Theater 2", price: 12.50 },
      { id: "st10", date: "Tomorrow", time: "12:30 PM", theater: "Theater 2", price: 12.50 },
      { id: "st11", date: "Tomorrow", time: "5:00 PM", theater: "Theater 1", price: 12.50 },
      { id: "st12", date: "Tomorrow", time: "9:00 PM", theater: "Theater 3", price: 12.50 }
    ]
  },
  {
    id: 3,
    title: "Good Bad Ugly",
    genres: ["Action", "Drama", "Thriller"],
    rating: "UA",
    runtime: 135,
    releaseDate: "2025-01-15",
    director: "Adhik Ravichandran",
    synopsis: "A high-octane action thriller starring Ajith Kumar in a triple role. The film follows the intertwined stories of three look-alikes with different personalities who find themselves caught in a dangerous game.",
    posterUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/goodbadugly.jpg-WYXuZjoB3u27xx9gdeH4iyyss9m9MK.jpeg",
    backdropUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/goodbadugly.jpg-WYXuZjoB3u27xx9gdeH4iyyss9m9MK.jpeg",
    showtimes: [
      { id: "st13", date: "Today", time: "10:00 AM", theater: "Theater 1", price: 15.00 },
      { id: "st14", date: "Today", time: "1:30 PM", theater: "IMAX", price: 20.00 },
      { id: "st15", date: "Today", time: "5:45 PM", theater: "Theater 2", price: 15.00 },
      { id: "st16", date: "Tomorrow", time: "11:15 AM", theater: "Theater 3", price: 15.00 },
      { id: "st17", date: "Tomorrow", time: "3:00 PM", theater: "IMAX", price: 20.00 },
      { id: "st18", date: "Tomorrow", time: "8:30 PM", theater: "Theater 1", price: 15.00 }
    ]
  },
  {
    id: 4,
    title: "Veera Dheera Sooran",
    genres: ["Action", "Historical", "Drama"],
    rating: "UA",
    runtime: 150,
    releaseDate: "2023-05-20",
    director: "S.U. Arun Kumar",
    synopsis: "Veera Dheera Sooran Part 2 is an epic historical action drama starring Chiyaan Vikram. The film follows the journey of a warrior who rises against oppression to protect his people, showcasing intense battle sequences and emotional drama.",
    posterUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/veera%20dheera%20sooran.jpg-z9O0OXRWX681yhNjja7Q7nmLdWVwyA.jpeg",
    backdropUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/veera%20dheera%20sooran.jpg-z9O0OXRWX681yhNjja7Q7nmLdWVwyA.jpeg",
    showtimes: [
      { id: "st19", date: "Today", time: "9:30 AM", theater: "Theater 2", price: 15.00 },
      { id: "st20", date: "Today", time: "12:45 PM", theater: "IMAX", price: 20.00 },
      { id: "st21", date: "Today", time: "4:30 PM", theater: "Theater 1", price: 15.00 },
      { id: "st22", date: "Tomorrow", time: "10:15 AM", theater: "Theater 3", price: 15.00 },
      { id: "st23", date: "Tomorrow", time: "2:30 PM", theater: "IMAX", price: 20.00 },
      { id: "st24", date: "Tomorrow", time: "7:00 PM", theater: "Theater 2", price: 15.00 }
    ]
  }
];

// Utility Functions
function formatCurrency(amount) {
  return '₹' + amount.toFixed(2);
}

function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function getMovieById(id) {
  return movies.find(movie => movie.id === parseInt(id));
}

function getShowtimeById(showtimeId) {
  for (const movie of movies) {
    const showtime = movie.showtimes.find(st => st.id === showtimeId);
    if (showtime) return { movie, showtime };
  }
  return null;
}

function generateSeats() {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 10;
  const seats = [];
  
  for (const row of rows) {
    for (let num = 1; num <= seatsPerRow; num++) {
      const id = `${row}${num}`;
      // Randomly mark some seats as reserved (20% chance)
      const status = Math.random() < 0.2 ? 'reserved' : 'available';
      seats.push({ id, row, number: num, status });
    }
  }
  
  return seats;
}

// Initialize Movies Page
function initMoviesPage() {
  const movieGrid = document.querySelector('.movie-grid');
  if (!movieGrid) return;
  
  movieGrid.innerHTML = '';
  
  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.dataset.id = movie.id;
    
    movieCard.innerHTML = `
      <div class="poster">
        <img src="${movie.posterUrl}" alt="${movie.title}">
      </div>
      <div class="movie-info">
        <div class="tags">
          ${movie.genres.map(genre => `<span>${genre}</span>`).join('')}
        </div>
        <h3>${movie.title}</h3>
        <p>${movie.synopsis.substring(0, 60)}...</p>
        <div class="movie-meta">
          <span>${movie.rating} • ${movie.runtime} min</span>
          <a href="movie-details.html?id=${movie.id}" class="book-now">Book Now</a>
        </div>
      </div>
    `;
    
    movieCard.addEventListener('click', () => {
      window.location.href = `movie-details.html?id=${movie.id}`;
    });
    
    movieGrid.appendChild(movieCard);
  });
}

// Initialize Movie Details Page
function initMovieDetailsPage() {
  const movieId = getUrlParam('id');
  if (!movieId) {
    window.location.href = 'movies.html';
    return;
  }
  
  const movie = getMovieById(parseInt(movieId));
  if (!movie) {
    window.location.href = 'movies.html';
    return;
  }
  
  // Set page title
  document.title = `BookMyShow - ${movie.title}`;
  
  // Set backdrop
  const backdrop = document.querySelector('.movie-backdrop');
  if (backdrop) {
    backdrop.style.backgroundImage = `url(${movie.backdropUrl})`;
  }
  
  // Set movie info
  const posterEl = document.querySelector('.movie-poster');
  const infoEl = document.querySelector('.movie-info-content');
  
  if (posterEl) {
    posterEl.innerHTML = `<img src="${movie.posterUrl}" alt="${movie.title}">`;
  }
  
  if (infoEl) {
    infoEl.innerHTML = `
      <div class="tags">
        ${movie.genres.map(genre => `<span>${genre}</span>`).join('')}
      </div>
      <h1>${movie.title}</h1>
      <div class="movie-meta">
        <span class="rating">${movie.rating}</span>
        <span>•</span>
        <span>${movie.runtime} min</span>
        <span>•</span>
        <span>${new Date(movie.releaseDate).toLocaleDateString()}</span>
      </div>
      <div class="synopsis">
        <h2>Synopsis</h2>
        <p>${movie.synopsis}</p>
      </div>
      <div class="director">
        <h2>Director</h2>
        <p>${movie.director}</p>
      </div>
    `;
  }
  
  // Set dates
  const uniqueDates = [...new Set(movie.showtimes.map(s => s.date))];
  const dateSelector = document.querySelector('.date-selector');
  
  if (dateSelector) {
    dateSelector.innerHTML = uniqueDates.map(date => `
      <button class="date-btn ${date === 'Today' ? 'active' : ''}" data-date="${date}">${date}</button>
    `).join('');
    
    // Date selection
    const dateBtns = document.querySelectorAll('.date-btn');
    dateBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dateBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showTimesForDate(movie, btn.dataset.date);
      });
    });
  }
  
  // Show times for initial date (Today)
  showTimesForDate(movie, 'Today');
  
  // Continue button
  const continueBtn = document.getElementById('continue-btn');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      const selectedShowtime = document.querySelector('.time-btn.active');
      if (selectedShowtime) {
        const showtimeId = selectedShowtime.dataset.id;
        window.location.href = `seat-selection.html?movieId=${movie.id}&showtimeId=${showtimeId}`;
      }
    });
  }
}

function showTimesForDate(movie, date) {
  const filteredShowtimes = movie.showtimes.filter(s => s.date === date);
  const timeGrid = document.querySelector('.time-grid');
  
  if (timeGrid) {
    timeGrid.innerHTML = filteredShowtimes.map(showtime => `
      <button class="time-btn" data-id="${showtime.id}">
        <div class="time">${showtime.time}</div>
        <div class="theater">${showtime.theater}</div>
        <div class="price">${formatCurrency(showtime.price)}</div>
      </button>
    `).join('');
    
    // Time selection
    const timeBtns = document.querySelectorAll('.time-btn');
    const continueBtn = document.getElementById('continue-btn');
    
    timeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        timeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        continueBtn.disabled = false;
      });
    });
  }
}

// Initialize Seat Selection Page
function initSeatSelectionPage() {
  const movieId = getUrlParam('movieId');
  const showtimeId = getUrlParam('showtimeId');
  
  if (!movieId || !showtimeId) {
    window.location.href = 'movies.html';
    return;
  }
  
  const result = getShowtimeById(showtimeId);
  if (!result) {
    window.location.href = 'movies.html';
    return;
  }
  
  const { movie, showtime } = result;
  
  // Set booking info
  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('show-date').textContent = showtime.date;
  document.getElementById('show-time').textContent = showtime.time;
  document.getElementById('show-theater').textContent = showtime.theater;
  
  // Set summary info
  document.getElementById('summary-movie').textContent = movie.title;
  document.getElementById('summary-date').textContent = showtime.date;
  document.getElementById('summary-time').textContent = showtime.time;
  document.getElementById('summary-theater').textContent = showtime.theater;
  document.getElementById('summary-price').textContent = formatCurrency(showtime.price);
  
  // Generate seats
  const seats = generateSeats();
  const seatsGrid = document.querySelector('.seats-grid');
  
  if (seatsGrid) {
    seatsGrid.innerHTML = seats.map(seat => `
      <div class="seat ${seat.status}" data-id="${seat.id}" data-status="${seat.status}">
        ${seat.id}
      </div>
    `).join('');
    
    // Seat selection
    const selectedSeats = [];
    const seatEls = document.querySelectorAll('.seat');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    seatEls.forEach(seatEl => {
      seatEl.addEventListener('click', () => {
        if (seatEl.dataset.status === 'reserved') return;
        
        const seatId = seatEl.dataset.id;
        
        if (seatEl.classList.contains('selected')) {
          seatEl.classList.remove('selected');
          seatEl.classList.add('available');
          const index = selectedSeats.findIndex(s => s.id === seatId);
          if (index !== -1) {
            selectedSeats.splice(index, 1);
          }
        } else {
          seatEl.classList.remove('available');
          seatEl.classList.add('selected');
          const seatIndex = seats.findIndex(s => s.id === seatId);
          if (seatIndex !== -1) {
            selectedSeats.push(seats[seatIndex]);
          }
        }
        
        // Update summary
        document.getElementById('summary-seats').textContent = 
          selectedSeats.length > 0 ? selectedSeats.map(s => s.id).join(', ') : 'None selected';
        
        const totalPrice = selectedSeats.length * showtime.price;
        document.getElementById('summary-total').textContent = formatCurrency(totalPrice);
        
        checkoutBtn.disabled = selectedSeats.length === 0;
        checkoutBtn.textContent = selectedSeats.length > 0 
          ? `Checkout (${formatCurrency(totalPrice)})` 
          : 'Select seats to continue';
      });
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', () => {
      if (selectedSeats.length > 0) {
        // Store booking data in localStorage
        const bookingData = {
          movieId: movie.id,
          showtimeId: showtime.id,
          movieTitle: movie.title,
          date: showtime.date,
          time: showtime.time,
          theater: showtime.theater,
          seats: selectedSeats,
          pricePerTicket: showtime.price,
          totalPrice: selectedSeats.length * showtime.price
        };
        
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
        window.location.href = 'checkout.html';
      }
    });
  }
}

// Initialize Checkout Page
function initCheckoutPage() {
  const bookingDataStr = localStorage.getItem('bookingData');
  if (!bookingDataStr) {
    window.location.href = 'movies.html';
    return;
  }
  
  const bookingData = JSON.parse(bookingDataStr);
  
  // Set summary info
  document.getElementById('summary-movie').textContent = bookingData.movieTitle;
  document.getElementById('summary-date').textContent = bookingData.date;
  document.getElementById('summary-time').textContent = bookingData.time;
  document.getElementById('summary-theater').textContent = bookingData.theater;
  document.getElementById('summary-seats').textContent = bookingData.seats.map(s => s.id).join(', ');
  document.getElementById('summary-tickets').textContent = 
    `${bookingData.seats.length} × ${formatCurrency(bookingData.pricePerTicket)}`;
  document.getElementById('summary-total').textContent = formatCurrency(bookingData.totalPrice);
  
  // Set pay button text
  document.getElementById('pay-btn').textContent = `Pay ${formatCurrency(bookingData.totalPrice)}`;
  
  // Form validation functions
  function validateName(name) {
    return /^[a-zA-Z ]{2,30}$/.test(name);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[0-9]{10}$/.test(phone);
  }

  function validateCardNumber(cardNumber) {
    const cleaned = cardNumber.replace(/\D/g, '');
    return /^[0-9]{13,19}$/.test(cleaned);
  }

  function validateExpiry(expiry) {
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return false;
    
    const [month, year] = expiry.split('/').map(Number);
    if (month < 1 || month > 12) return false;
    
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    if (year < currentYear) return false;
    if (year === currentYear && month < currentMonth) return false;
    
    return true;
  }

  function validateCVV(cvv) {
    return /^[0-9]{3,4}$/.test(cvv);
  }

  function validateCardName(name) {
    return /^[a-zA-Z ]{2,30}$/.test(name);
  }

  // Handle form submission
  const paymentForm = document.getElementById('payment-form');
  
  if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const cardNumber = document.getElementById('card-number').value.trim();
      const expiry = document.getElementById('expiry').value.trim();
      const cvv = document.getElementById('cvv').value.trim();
      const cardName = document.getElementById('card-name').value.trim();
      
      // Validate all fields
      let isValid = true;
      
      if (!validateName(name)) {
        alert('Please enter a valid full name (letters and spaces only)');
        isValid = false;
      }
      
      if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        isValid = false;
      }
      
      if (!validatePhone(phone)) {
        alert('Please enter a valid 10-digit phone number');
        isValid = false;
      }
      
      if (!validateCardNumber(cardNumber)) {
        alert('Please enter a valid credit card number (13-19 digits)');
        isValid = false;
      }
      
      if (!validateExpiry(expiry)) {
        alert('Please enter a valid expiry date in MM/YY format');
        isValid = false;
      }
      
      if (!validateCVV(cvv)) {
        alert('Please enter a valid CVV (3 or 4 digits)');
        isValid = false;
      }
      
      if (!validateCardName(cardName)) {
        alert('Please enter a valid name on card (letters and spaces only)');
        isValid = false;
      }
      
      if (!isValid) return;
      
      // Show loading state
      const payBtn = document.getElementById('pay-btn');
      payBtn.disabled = true;
      payBtn.textContent = 'Processing...';
      
      // Simulate payment processing
      setTimeout(() => {
        // Hide form and show confirmation
        document.getElementById('checkout-form').classList.add('hidden');
        document.getElementById('confirmation').classList.remove('hidden');
        
        // Set confirmation details
        const bookingId = 'BOK' + Math.floor(Math.random() * 10000);
        document.getElementById('booking-id').textContent = bookingId;
        document.getElementById('conf-movie').textContent = bookingData.movieTitle;
        document.getElementById('conf-datetime').textContent = `${bookingData.date} at ${bookingData.time}`;
        document.getElementById('conf-theater').textContent = bookingData.theater;
        document.getElementById('conf-seats').textContent = bookingData.seats.map(s => s.id).join(', ');
        document.getElementById('conf-total').textContent = formatCurrency(bookingData.totalPrice);
        
        // Clear booking data from localStorage
        localStorage.removeItem('bookingData');
      }, 2000);
    });
    
    // Add input formatting for card number
    const cardNumberInput = document.getElementById('card-number');
    if (cardNumberInput) {
      cardNumberInput.addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        this.value = value;
      });
    }
    
    // Add input formatting for expiry date
    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
      expiryInput.addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 2) {
          value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        this.value = value;
      });
    }
    
    // Restrict CVV input to numbers only
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
      cvvInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '');
      });
    }
  }
}

// Initialize page based on URL
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  
  if (path.endsWith('index.html') || path.endsWith('/')) {
    initMoviesPage();
  } else if (path.endsWith('movies.html')) {
    initMoviesPage();
  } else if (path.endsWith('movie-details.html')) {
    initMovieDetailsPage();
  } else if (path.endsWith('seat-selection.html')) {
    initSeatSelectionPage();
  } else if (path.endsWith('checkout.html')) {
    initCheckoutPage();
  }
}
);
