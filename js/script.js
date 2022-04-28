// Header-bottom
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__bottom-item-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".container__dropdown");
    
    document.querySelectorAll(".header__bottom-item-btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });
    
    document.querySelectorAll(".container__dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-header__bottom-item");
      }
    })
    dropdown.classList.toggle("active-header__bottom-item");
    btn.classList.toggle("active--btn")
  });
});

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__bottom-list")) {
    document.querySelectorAll(".container__dropdown").forEach(el => {
        el.classList.remove("active-header__bottom-item");
    })
     document.querySelectorAll(".header__bottom-item-btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
});

// swiper

// const swiperHero = new Swiper ('.hero-swiper', {
//   loop: true,
//   autoplay: {
//     delay:5000,
//   },
//   effect: 'fade',
//   fadeEffect: {
//     crossFade:true
//   },
//   speed: 500,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   }
// });

})

// swiper


// Select
// let select = function () {
//   let selectHeader = document.querySelectorAll('.select__header');
//   let selectItem = document.querySelectorAll('.select__item');

//   selectHeader.forEach(item => {
//       item.addEventListener('click', selectToggle)
//   });

//   selectItem.forEach(item => {
//       item.addEventListener('click', selectChoose)
//   });

//   function selectToggle() {
//       this.parentElement.classList.toggle('is-active');
//   }

//   function selectChoose() {
//       let text = this.innerText,
//           select = this.closest('.select'),
//           currentText = select.querySelector('.select__current');
//       currentText.innerText = text;
//       select.classList.remove('is-active');

//   }

// };

function scrollClick(butt, sect) {
  $(function () {
    $(butt).on('click', function (e) {
      $('html,body').stop().animate({ scrollTop: $(sect).offset().top }, 1000);
      e.preventDefault();
    });
  });
}
scrollClick('#about', '#first-section')
scrollClick('#gallery', '#second-section')
scrollClick('#faq', '#third-section')
scrollClick('#event', '#fourth-section')
scrollClick('#project', '#fiveth-section')
scrollClick('#contact', '#sixth-section')



// select();
const defaultSelect = () => {
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
      searchEnabled: false,
      position: 'bottom',
      itemSelectText: '',
      shouldSort: false
  });

};
defaultSelect ();



// Swiper-gallary
var swiper = new Swiper(".gallary-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".gallery-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.gallery-btn-next',
    prevEl: '.gallery-btn-prev',
    
},
breakpoints: {
  // 1920: {
  //   slidesPerView: 3,
  //   spaceBetween: 50,
  // }, 
  1500: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
  1100: {
    
    slidesPerView: 3,
    spaceBetween: 34,
  },

  1000: {
    
    slidesPerView: 2,
    spaceBetween: 30,
  },
  767: {
    
    slidesPerView: 2,
    spaceBetween: 39,
  },
  600: {
  
    slidesPerView: 2,
    spaceBetween: 39
  },

  450: {
    slidesPerView: 2,
    spaceBetween: 30
  },

  100: {
    slidesPerView: 1,
  }
}
});


// Accordeon

    // jQuery(document).ready(function($){
    //     $("#my-accordion").accordionjs({
    //       activeIndex : false,
    //     });
    // });

      jQuery(document).ready(function($){
        $("#my-accordion").accordionjs( );
    });

    var tabNavs = document.querySelectorAll(".nav-tab");
    var tabPanes = document.querySelectorAll(".tab-pane");
    
    for (var i = 0; i < tabNavs.length; i++) {
    
      tabNavs[i].addEventListener("click", function(e){
        e.preventDefault();
        var activeTabAttr = e.target.getAttribute("data-tab");
    
        for (var j = 0; j < tabNavs.length; j++) {
          var contentAttr = tabPanes[j].getAttribute("data-tab-content");
    
          if (activeTabAttr === contentAttr) {
            tabNavs[j].classList.add("active");
            tabPanes[j].classList.add("active"); 
          } else {
            tabNavs[j].classList.remove("active");
            tabPanes[j].classList.remove("active");
          }
        };
      });
    }

    $(".artist-list  button").click(function () {
      $(".artist-link").removeClass("artist-active");
      $(this).addClass("artist-active");
    });

// Swiper-event
    



var swiper = new Swiper(".event-swiper", {
      slidesPerView: 3,
      spaceBetween: 50,
      

      breakpoints: {
        1025: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        900: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        600: {
          slidesPerView: 2,
          spaceBetween: 32, 
        },
        100: {
          slidesPerView: 1,
        }
      },
      navigation: {
        nextEl: '.events-btn-next',
        prevEl: '.events-btn-prev',
    },
    pagination: {
      el: ".events-pagination",
      clickable: true,
  },
    });



// Swiper-project
    var swiper = new Swiper(".project-swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".projects-btn-next",
        prevEl: ".projects-btn-prev",
      },

      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 50,
        }, 
        1600: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      
        1000: {
          slidesPerView: 2,
          spaceBetween: 44,
        },
        640: {
          slidesPerView: 2,
        },
        100: {
          slidesPerView: 1,
          spaceBetween: 25,
        }
      }
    });


//  Form-imput-mask
// var selector = document.querySelector("input[type='tel']");
// var im = new Inputmask("+7 (999)-999-99-99");
// im.mask(selector);

// new JustValidate('.form', {
//     rules: {
//         name: {
//             required: true,
//             minLength: 2,
//             maxLength: 30
//         }, 

//         messages: {
//           text1: {
//             tel: "Пожалуйста введите корректные данные",
//             name: "Введите корректное имя",
//           }
//         },
//         tel: {
//             required: true,
//             function: (name, value) => {
//                 const phone = selector.inputmask.unmaskedvalue()
//                 console.log(phone)
//                 return Number(phone) && phone.length === 10
//             }
//         }, 
//     },
// });

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

const validation = new JustValidate(
  '.contacts-form',
  {
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: '#D11616',
    },
    position: 'top',
  },
);

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваше имя',
    },
    {
      rule: 'customRegexp',
      value: /^[-a-zA-Z\u0410-\u044F`]+$/,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Не менее 2 символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Не более 30 символов',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш телефон',
    },
    {
      validator: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
      errorMessage: 'Недопустимый формат',
    },
  ])
  .onSuccess((event) => {
    console.log('Валидация прошла успешно!', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          alert("Форма отправлена!");
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });

// Map
function init() {
  let map = new ymaps.Map('map', {
      center: [55.758468,37.601088],
      zoom: 15
  });

  let placemark = new ymaps.Placemark([55.758468,37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/footer/geo.svg',
      iconImageSize: [20, 20], 
      iconImageOffset: [0,0]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
map.controls.remove('searchControl'); // удаляем поиск
map.controls.remove('trafficControl'); // удаляем контроль трафика
map.controls.remove('typeSelector'); // удаляем тип
map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
map.controls.remove('rulerControl'); // удаляем контрол правил
map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

map.geoObjects.add(placemark);
};

ymaps.ready(init);



// Burger


document.querySelector('.burger', 'header__nav-btn').addEventListener('click', function () {
  document.querySelector('.burger').classList.toggle('burger--open')
  document.querySelector('.burger-cont').classList.toggle('header-nav-hidden')
  document.querySelector('.burger-cont').classList.toggle('header__enter--hidden')
  document.querySelector('body').classList.toggle("overflow");
})


$(document).ready(function() {
  $('.header__nav-btn').click(function(event) {
      $('.header__burger').removeClass('burger--open');
      $('body').removeClass('lock')
  });
});

$(document).ready(function() {
  $('.header__nav-btn').click(function(event) {
      $('.burger-cont').toggleClass('header-nav-hidden');
      $('body').removeClass('lock')
  });
});



// Search-mobile
$(document).ready(function() {
  $('.header__search-button').click(function(event) {
    $(this).toggleClass('header__search_active');
    $(this).next('.header-search-mobile').toggleClass('header__search_visible');
  });
});

initSearch();
	// initHeaderScrollbar();
	// initMenu();

	function initSearch() {
		$('.btn-click').on('click', function() {
			$(this).toggleClass('active')
		});

		$(document).on('click', (e) => {
			if ( !$('.btn-click').is(e.target) && !$('.block-click').is(e.target) && $('.block-click').has(e.target).length === 0) {
					$('.btn-click').removeClass('active')
			}
		});
	};

// Tooltip
  tippy("#tooltip-1", {
    content: "Пример современных тенденций - современная методология разработки",
    trigger: "focusin",
    hideOnClick: true,
    delay: 100,
    maxWidth: 300,
});

tippy("#tooltip-2", {
    content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
    trigger: "focusin",
    hideOnClick: true,
    delay: 100,
    maxWidth: 300,
});

tippy("#tooltip-3", {
    content: "В стремлении повысить качество",
    trigger: "focusin",
    hideOnClick: true,
    delay: 100,
    maxWidth: 300,
});

const swiperHero = new Swiper(".hero-swiper", {
  allowTouchMove: false,
  direction: "horizontal",
  loop: true,
  effect: "fade",
  speed: 500,

  autoplay: {
      delay: 2000,
  },
});

function slowScroll(id) { 
  var offset = 0;
  $('html, body').animate({ 
       scrollTop: $(id).offset().top - offset 
  }, 1000);
  return false; 
} 

if (window.applyFocusVisiblePolyfill != null) {
  window.applyFocusVisiblePolyfill(myComponent.shadowRoot);
}


