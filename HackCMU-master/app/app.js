(function () {
  const items = [
    {
      id: 0,
      name: 'Carter McBride',
      year: 1,
      level: 'Novice',
      images: ['images/image1.jpg', 'images/image1.jpg'],
      availability: 0,
      description: 'Looking for someone to go on morning runs with!'
    },
    {
      id: 1,
      name: 'Whitley Hicken',
      year: 19,
      level: 'Expert',
      images: ['images/whitley1.jpg', 'images/whitley2.jpg'],
      availability: 1,
      description: 'I\'d love to find a good spotter for heavy weight lifting'
    },
    {
      id: 2,
      name: 'Andrew Benson',
      year: 2,
      level: 'Storyteller',
      images: ['images/tag1.jpg'],
      availability: 2,
      description: '(Keep swiping right!)'
    },
    {
      id: 3,
      name: 'A boy met a girl on Tinder',
      year: 3,
      level: 'Motivational Speaker',
      images: ['images/tag2.jpg'],
      availability: 3,
      description: '(Keep going! It gets better!)📸'
    },
	{
      id: 4,
      name: 'It\'s a match!',
      year: 4,
      level: 'It went well.',
      images: ['images/tag3.png'],
      availability: 4,
      description: '(Continue!)📸'
    },
	{
      id: 5,
      name: 'Our first hello',
      year: 5,
      level: 'Jedi Master',
      images: ['images/firstHello.gif'],
      availability: 5,
      description: 'I start people off on really great relationships. It works out really really well usually.'
    },
	{
      id: 6,
      name: 'Our first date',
      year: 6,
      level: 'Mekong Cafe 2',
      images: ['images/firstDate1.png', 'images/firstDate2.png'],
      availability: 6,
      description: 'She arrived before I did. I didn\'t recognize her, so I gave her a call when I was sitting behind her the whole time!'
    },
	{
	  id: 7,
      name: 'Where we made it official',
      year: 7,
      level: 'Discovery (Manila) Park',
      images: ['images/Official1.png', 'images/Official2.png'],
      availability: 7,
      description: 'It was July 4th, 2016. We were watching the fireworks. He said "Well, we\'ve been on a few dates." - "Seven dates." - "Seven? Seven dates now. I think we should make it official."'	
	},
	{
	  id: 8,
      name: 'Where we shared our first kiss',
      year: 8,
      level: 'My front doorstep',
      images: ['images/firstKiss1.jpg'],
      availability: 8,
      description: 'We had just finished up a date at the library. We then sat by the duck pond for a while and had a positive DTR. When we were at my doorstep, I played with my keys and went 60%. She didn\'t get it, so I said I was pulling a Hitch move and going 60%.'	
	},
	{
	  id: 9,
      name: 'Thus followed many dates.',
      year: 9,
      level: 'Everywhere',
      images: ['images/misc1.jpg', 'images/me3.jpg'],
      availability: 9,
      description: 'We went to a plate painting place and hers was awesome!'
	},
	{
	  id: 10,
      name: 'And our love grew...',
      year: 10,
      level: 'Pizza making',
      images: ['images/us1.jpg', 'images/us2.jpg'],
      availability: 9,
      description: 'This is when we made pizzas together and played games.'
	},
	{
	  id: 11,
      name: 'and grew...',
      year: 11,
      level: 'Mustache growing',
      images: ['images/us5.jpg'],
      availability: 11,
      description: 'After a successful attack on the nickle arcade, we walk away with our pride and considerably more facial hair.'
	},
	{
	  id: 12,
      name: 'and grew.',
      year: 12,
      level: 'Slurpee consumer',
      images: ['images/us8.jpg'],
      availability: 12,
      description: 'This is where we made pizzas together and played games.'
	},
	{
		id: 13,
		name: 'She\'s an example',
		year: 13,
		level: '(Read the profile)',
		images: ['images/us6.jpg', 'images/us6.2.jpg'],
		availability: 13,
		description: 'Whitley is a fantastic example to me. First of all, she is a devoted daughter of God. She strives to make her Heavenly Father and her earthly parents proud of her every action. She shows dilligence and care in all that she does, big or small. She is devoted to being the best person she can be and always striving to be more Christlike.'
	},
	{
		id: 14,
		name: 'She makes me better',
		year: 14,
		level: 'I want to be the very best.',
		images: ['images/me5.jpg', 'images/me6.jpg', 'images/us9.jpg'],
		availability: 14,
		description: 'Because she is so great, she makes me want to be my very best. She deserves the absolute most wonderful and loving guy in the world, and I want to be that man for her.'
	},
	{
		id: 15,
		name: 'Our goal',
		year: 15,
		level: 'Temple',
		images: ['images/us3.jpg', 'images/us4.jpg'],
		availability: 15,
		description: 'But there is one last step...'
	},
	{
		id: 16,
		name: 'But there is one last step...',
		year: 16,
		level: 'Nearby',
		images: ['images/tag4.jpg'],
		availability: 0,
		description: 'But there is one last step...'
	},
	{
		id: 17,
		name: 'Please open the door',
		year: 17,
		level: 'That one that I always come in through',
		images: ['images/open1.jpg'],
		availability: 15,
		description: 'What are you waiting for?'
	},
	{
		id: 18,
		name: 'At the doorstep',
		year: 18,
		level: 'Professional Flower Holder',
		images: ['images/Engage1.JPG'],
		availability: 0,
		description: 'I sent the message and then waited on the doorstep for about 10 minutes. She kept reloading the site to show her family halfway through.'
	},
	{
		id: 19,
		name: 'Reaction',
		year: 19,
		level: 'A Great Hugger',
		images: ['images/Engage2.JPG'],
		availability: 0,
		description: 'She opened the door crying. Honestly, she was so emotional that she forgot to say yes "officially" until some minutes later when her dad asked her. She said: "Oh I guess I didn\'t say anything yet. *looks at me* Yes!'
	},
	{
		id: 19,
		name: 'She said yes!',
		year: 18,
		level: 'Officially Engaged Man',
		images: ['images/Engage3.jpg'],
		availability: 0,
		description: 'This was later that day when we had time to prepare ourselves.'
	}
  ];

  const dataProvider = (function* () {
    while (true) {
      yield *items;
    }
  })();

  function adjustSwipeItems() {
    const top = document.querySelector('.item--top');
    const next = document.querySelector('.item--next');
    next.classList.add('hidden');
    top.style.cssText = '';
    top.style.position = 'relative';
    const topR = top.getBoundingClientRect();
    top.style.position = '';
    next.classList.remove('hidden');
    top.style.top = next.style.top = `${topR.top}px`;
    top.style.width = next.style.width = `${topR.width}px`;
    top.style.height = next.style.height = `${topR.height}px`;
    top.onResize();
    next.onResize();
  }

  function updateCards(event) {
    const top = document.querySelector('.item--top');
    window.ga && ga('send', 'event', `item-${top.data.id}`, event.detail);
    const next = document.querySelector('.item--next');
    const details = document.querySelector('tinderforbananas-details');
    top.style.transform = '';
    top.selected = 0;
    top.data = next.data;
    next.data = dataProvider.next().value;
  }

  function hookupButtons() {
    const details = document.querySelector('.view--details');
    document.querySelectorAll('.control--like').forEach(btn => 
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').like());
      })
    );
    document.querySelectorAll('.control--nope').forEach(btn =>
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').nope());
      })
    );
    document.querySelectorAll('.control--superlike').forEach(btn => 
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').superlike());
      })
    );
  }

  function showDetails(event) {
    const swipelist = document.querySelector('.view--swipelist');
    const data = swipelist.querySelector('.item--top').data;
    window.ga && ga('send', 'event', `item-${data.id}`, 'details');
    const details = document.querySelector('.view--details');
    const detailsText1 = details.querySelector('.item__details');
    const detailsText2 = details.querySelector('.description');
    const detailsNav = details.querySelector('nav');
    const carousel = document.querySelector('tinderforbananas-carousel');
    const image = document.querySelector('.view--swipelist .item--top picture');
    details.querySelector('tinderforbananas-details').data = data;

    // Let’s do FLIP!
    const start = image.getBoundingClientRect();
    
    swipelist.classList.add('overlaid');
    details.classList.remove('hidden');

    const target = carousel.getBoundingClientRect();
    carousel.style.transformOrigin = 'top left';
    carousel.style.transform = `scaleX(${start.width/target.width}) scaleY(${start.height/target.height}) translate(${start.left - target.left}px, ${start.top - target.top}px)`;   
    return requestAnimationFramePromise()
      .then(_ => requestAnimationFramePromise())
      .then(_ => {
        carousel.style.transition = 'transform 0.15s ease-in-out';
        carousel.style.transform = 'initial';
        detailsText1.style.transform = 'initial';
        detailsText2.style.transform = 'initial';
        detailsNav.style.transform = 'initial';
        return transitionEndPromise(carousel);
      })
      .then(_ => {
        carousel.style.transform = '';
        carousel.style.transition = '';
        carousel.style.transformOrigin = '';
      });

  }

  function hideDetails(event) {
    const swipelist = document.querySelector('.view--swipelist');
    const details = document.querySelector('.view--details');
    const detailsText1 = details.querySelector('.item__details');
    const detailsText2 = details.querySelector('.description');
    const detailsNav = details.querySelector('nav');
    const carousel = document.querySelector('tinderforbananas-carousel');
    const item = document.querySelector('.view--swipelist .item--top');
    const image = document.querySelector('.view--swipelist .item--top picture');

    item.selected = event && event.detail.selected || 0;

    const start = carousel.getBoundingClientRect();
    swipelist.classList.remove('overlaid');
    details.classList.add('hidden');
    const target = image.getBoundingClientRect();
    swipelist.classList.add('overlaid');
    details.classList.remove('hidden');

    item.style.overflow = 'visible';
    carousel.style.transformOrigin = 'top left';
    carousel.style.transition = 'transform 0.15s ease-in-out';
    return requestAnimationFramePromise()
      .then(_ => requestAnimationFramePromise())
      .then(_ => {
        carousel.style.transform = `scaleX(${target.width/start.width}) scaleY(${target.height/start.height}) translate(${target.left - start.left}px, ${target.top - start.top}px)`;   
        detailsText1.style.transform = '';
        detailsText2.style.transform = '';
        detailsNav.style.transform = '';
        return transitionEndPromise(carousel);
      })
      .then(_ => {
        carousel.style.transform = '';
        carousel.style.transition = '';
        carousel.style.transformOrigin = '';
        item.style.overflow = 'hidden';
        details.classList.add('hidden');
        swipelist.classList.remove('overlaid');
      });
  }

  function copyControls() {
    document.querySelectorAll('.view--details .control').forEach(btn => {
      const actionName = Array.from(btn.classList).find(name => /(like|nope)/.test(name));
      const svg = document.querySelector(`.view--swipelist .${actionName} svg`).cloneNode(true);
      btn.appendChild(svg);
    });
  }

  function installServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('sw.js');
  }

  function init() {
    const top = document.querySelector('.item--top');
    top.data = dataProvider.next().value;
    top.addEventListener('swipe', updateCards);
    top.addEventListener('details', showDetails);
    const next = document.querySelector('.item--next');
    next.data = dataProvider.next().value;
    const details = document.querySelector('tinderforbananas-details');
    details.addEventListener('dismiss', hideDetails);
    copyControls();
    adjustSwipeItems();
    window.addEventListener('resize', adjustSwipeItems);
    hookupButtons();
    installServiceWorker();
  }
  document.addEventListener('DOMContentLoaded', init);
})();
