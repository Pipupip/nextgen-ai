/* ============================================
   NextGen AI — Скрипты сайта
   ============================================ */

// ============================================
// НАСТРОЙКИ TELEGRAM BOT
// ============================================
const TELEGRAM_BOT_TOKEN = 'ВАШ_TELEGRAM_BOT_TOKEN';
const TELEGRAM_CHAT_ID = 'ВАШ_CHAT_ID';

document.addEventListener('DOMContentLoaded', function () {

  // ============================================
  // ПРЕЛОАДЕР
  // ============================================
  var preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(function () {
      preloader.classList.add('preloader--hidden');
      setTimeout(function () { preloader.style.display = 'none'; }, 600);
    }, 800);
  }

  // ============================================
  // МОБИЛЬНОЕ МЕНЮ
  // ============================================
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('burger--active');
      nav.classList.toggle('nav--open');
    });

    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('burger--active');
        nav.classList.remove('nav--open');
      });
    });

    document.addEventListener('click', function (e) {
      if (!burger.contains(e.target) && !nav.contains(e.target)) {
        burger.classList.remove('burger--active');
        nav.classList.remove('nav--open');
      }
    });
  }

  // ============================================
  // TYPEWRITER (печатная машинка)
  // ============================================
  var typewriterEl = document.getElementById('typewriter');
  if (typewriterEl) {
    var phrases = [
      'Разрабатываем Telegram-ботов, парсеры данных и сайты под ключ.',
      'Внедряем AI-решения, которые реально экономят время и деньги.',
      'Автоматизируем рутину — вы занимаетесь бизнесом.',
      'Чат-боты, парсинг, сайты с интеграцией нейросетей.'
    ];
    var phraseIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var currentText = '';

    function typeEffect() {
      var target = phrases[phraseIndex];

      if (!isDeleting) {
        currentText = target.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === target.length) {
          isDeleting = true;
          setTimeout(typeEffect, 2500);
          typewriterEl.textContent = currentText;
          return;
        }
      } else {
        currentText = target.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      typewriterEl.textContent = currentText;
      var speed = isDeleting ? 30 : 60;
      setTimeout(typeEffect, speed);
    }

    setTimeout(typeEffect, 1500);
  }

  // ============================================
  // АНИМАЦИИ ПРИ СКРОЛЛЕ (Intersection Observer)
  // ============================================
  var revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('reveal--visible');
    });
  }

  // ============================================
  // СЧЁТЧИКИ СТАТИСТИКИ
  // ============================================
  var statCounters = document.querySelectorAll('.stat-counter');

  if (statCounters.length > 0 && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'));
          animateCounter(el, target);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statCounters.forEach(function (el) {
      counterObserver.observe(el);
    });
  } else {
    statCounters.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-target'));
      animateCounter(el, target);
    });
  }

  function animateCounter(el, target) {
    var current = 0;
    var step = Math.max(1, Math.ceil(target / 40));
    var interval = setInterval(function () {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current;
    }, 30);
  }

  // ============================================
  // FAQ / АККОРДЕОН
  // ============================================
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-item__question');
    if (question) {
      question.addEventListener('click', function () {
        var isActive = item.classList.contains('faq-item--active');
        faqItems.forEach(function (other) {
          other.classList.remove('faq-item--active');
        });
        if (!isActive) {
          item.classList.add('faq-item--active');
        }
      });
    }
  });

  // ============================================
  // КАЛЬКУЛЯТОР СТОИМОСТИ
  // ============================================
  var calcService = document.getElementById('calc-service');
  var calcOptions = document.querySelectorAll('.calc-option');
  var calcTotal = document.getElementById('calc-total');

  if (calcService && calcTotal) {
    function updateCalculator() {
      var basePrice = parseInt(calcService.value);
      var extras = 0;
      calcOptions.forEach(function (cb) {
        if (cb.checked) extras += parseInt(cb.getAttribute('data-price'));
      });
      calcTotal.textContent = (basePrice + extras).toLocaleString('ru-RU') + ' ₽';
    }

    calcService.addEventListener('change', updateCalculator);
    calcOptions.forEach(function (cb) {
      cb.addEventListener('change', updateCalculator);
    });
    updateCalculator();
  }

  // ============================================
  // МОДАЛЬНОЕ ОКНО
  // ============================================
  var modal = document.getElementById('modal');
  var modalClose = document.getElementById('modal-close');
  var orderBtns = document.querySelectorAll('.order-btn');
  var openModalBtns = document.querySelectorAll('.open-modal-btn');
  var modalService = document.getElementById('modal-service');

  orderBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var service = btn.getAttribute('data-service');
      if (modalService && service) {
        for (var i = 0; i < modalService.options.length; i++) {
          if (modalService.options[i].value === service) {
            modalService.selectedIndex = i;
            break;
          }
        }
      }
      openModal();
    });
  });

  openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });

  function openModal() {
    if (modal) {
      modal.classList.add('modal-overlay--open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('modal-overlay--open');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('modal-overlay--open')) {
        closeModal();
      }
    });
  }

  // ============================================
  // КАРУСЕЛЬ ОТЗЫВОВ
  // ============================================
  var carouselSlides = document.querySelectorAll('.testimonials-carousel__slide');
  var carouselDots = document.querySelectorAll('.testimonials-carousel__dot');
  var currentSlide = 0;
  var slideInterval;

  if (carouselSlides.length > 0) {
    function showSlide(index) {
      carouselSlides.forEach(function (s, i) {
        s.classList.toggle('testimonials-carousel__slide--active', i === index);
      });
      carouselDots.forEach(function (d, i) {
        d.classList.toggle('testimonials-carousel__dot--active', i === index);
      });
      currentSlide = index;
    }

    function nextSlide() {
      showSlide((currentSlide + 1) % carouselSlides.length);
    }

    function resetAutoPlay() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }

    carouselDots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        showSlide(parseInt(dot.getAttribute('data-slide')));
        resetAutoPlay();
      });
    });

    slideInterval = setInterval(nextSlide, 5000);
  }

  // ============================================
  // ФИЛЬТР ПОРТФОЛИО
  // ============================================
  var filterBtns = document.querySelectorAll('.portfolio-filter__btn');
  var portfolioCards = document.querySelectorAll('.portfolio-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          b.classList.remove('portfolio-filter__btn--active');
        });
        btn.classList.add('portfolio-filter__btn--active');

        var filter = btn.getAttribute('data-filter');

        portfolioCards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
            card.style.opacity = '0';
            setTimeout(function () { card.style.opacity = '1'; }, 20);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ============================================
  // КНОПКА "НАВЕРХ"
  // ============================================
  var scrollTopBtn = document.getElementById('scroll-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('scroll-top--visible', window.pageYOffset > 400);
    });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================
  // ОТПРАВКА ФОРМЫ В TELEGRAM
  // ============================================
  var consultForms = document.querySelectorAll('#consult-form');
  var modalForm = document.getElementById('modal-form');

  consultForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      handleFormSubmit(e, form, '#name', '#phone', '#service', '#form-success');
    });
  });

  if (modalForm) {
    modalForm.addEventListener('submit', function (e) {
      handleFormSubmit(e, modalForm, '#modal-name', '#modal-phone', '#modal-service', '#modal-success');
    });
  }

  function handleFormSubmit(e, form, nameSel, phoneSel, serviceSel, successSel) {
    e.preventDefault();

    var name = form.querySelector(nameSel).value.trim();
    var phone = form.querySelector(phoneSel).value.trim();
    var service = form.querySelector(serviceSel).value;

    if (!name || !phone) {
      alert('Заполните имя и телефон.');
      return;
    }

    var btn = form.querySelector('.form__submit');
    btn.disabled = true;
    btn.textContent = 'Отправка...';

    var msg = '💼 ЗАЯВКА С КОРПОРАТИВНОГО САЙТА!\n' +
              '\n👤 Имя: ' + name +
              '\n📞 Телефон: ' + phone +
              '\n🎯 Интересует: ' + service;

    if (TELEGRAM_BOT_TOKEN === 'ВАШ_TELEGRAM_BOT_TOKEN') {
      console.warn('Telegram токен не настроен');
      showSuccess(form, successSel);
      btn.disabled = false;
      btn.textContent = 'Отправить заявку';
      return;
    }

    fetch('https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg, parse_mode: 'HTML' })
    })
    .then(function (r) { return r.json(); })
    .then(function (res) {
      if (res.ok) showSuccess(form, successSel);
      else { alert('Ошибка отправки.'); console.error(res); }
    })
    .catch(function (err) {
      alert('Ошибка соединения.');
      console.error(err);
    })
    .finally(function () {
      btn.disabled = false;
      btn.textContent = 'Отправить заявку';
    });
  }

  function showSuccess(form, sel) {
    form.style.display = 'none';
    var block = form.parentElement.querySelector(sel);
    if (block) block.classList.add('form__success--visible');
  }

  // ============================================
  // ПЛАВНАЯ ПРОКРУТКА К ЯКОРЯМ
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth'
        });
      }
    });
  });

});
