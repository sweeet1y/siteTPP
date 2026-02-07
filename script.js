// News Database
const newsDatabase = [
    {
        id: 1,
        title: "Завершена реконструкция подстанции 110 кВ «Северная»",
        date: "05.02.2025",
        content: "АО «Энергосеть» завершило работы по комплексной реконструкции подстанции 110 кВ «Северная». Общая стоимость проекта составила 2,5 млрд тенге. Модернизация позволит повысить надежность электроснабжения более 35 тысяч потребителей.",
        category: "company"
    },
    {
        id: 2,
        title: "Плановые ремонтные работы на линиях электропередач",
        date: "01.02.2025",
        content: "В период с 10 по 15 февраля 2025 года будут проведены плановые ремонтные работы на воздушных линиях электропередач 10 кВ в Центральном районе. Потребители будут уведомлены о временных отключениях не менее чем за 72 часа.",
        category: "technical"
    },
    {
        id: 3,
        title: "Утверждены новые тарифы на передачу электроэнергии",
        date: "28.01.2025",
        content: "Комитетом по регулированию естественных монополий утверждены новые тарифы на услуги по передаче электрической энергии на 2025 год. Средний рост тарифа составит 8,2%. Подробная информация размещена в разделе «Тарифы».",
        category: "company"
    },
    {
        id: 4,
        title: "Внедрение цифровых технологий учета электроэнергии",
        date: "22.01.2025",
        content: "АО «Энергосеть» начало программу по установке цифровых приборов учета электроэнергии. В 2025 году планируется заменить более 15 000 электросчетчиков, что позволит автоматизировать сбор показаний и повысить точность расчетов.",
        category: "company"
    },
    {
        id: 5,
        title: "Подведены итоги работы за 2024 год",
        date: "15.01.2025",
        content: "Состоялось заседание Совета директоров АО «Энергосеть», на котором были подведены итоги производственно-финансовой деятельности за 2024 год. Объем переданной электроэнергии составил 4 850 млн кВт·ч, что на 3,2% выше показателей предыдущего года.",
        category: "company"
    },
    {
        id: 6,
        title: "Программа технологического присоединения на 2025 год",
        date: "10.01.2025",
        content: "Утверждена программа технологического присоединения новых потребителей к электрическим сетям на 2025 год. Общая мощность подключаемых объектов составит 78 МВт. Прием заявок осуществляется в соответствии с действующими правилами.",
        category: "company"
    },
    {
        id: 7,
        title: "Аварийно-восстановительные работы в Южном районе",
        date: "03.02.2025",
        content: "Бригады АО «Энергосеть» оперативно устранили последствия обрыва линии электропередач в Южном районе, вызванного сильным ветром. Электроснабжение потребителей было восстановлено в течение 2 часов.",
        category: "technical"
    },
    {
        id: 8,
        title: "Модернизация диспетчерского центра",
        date: "25.01.2025",
        content: "Завершен первый этап модернизации центрального диспетчерского пункта. Внедрены новые системы мониторинга и управления сетями в режиме реального времени, что повысит оперативность реагирования на нештатные ситуации.",
        category: "company"
    }
];

// Document Modal Data
const documentData = {
    'tariff-2025': {
        title: 'Тарифы на услуги по передаче электрической энергии на 2025 год',
        content: `
            <h3>Утвержденные тарифы на 2025 год</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background: #1f3c88; color: white;">
                    <th style="padding: 12px; text-align: left;">Уровень напряжения</th>
                    <th style="padding: 12px; text-align: right;">Тариф (тг/кВт·ч)</th>
                </tr>
                <tr style="background: #f8f9fa;">
                    <td style="padding: 12px;">110 кВ</td>
                    <td style="padding: 12px; text-align: right;">3.82</td>
                </tr>
                <tr>
                    <td style="padding: 12px;">35 кВ</td>
                    <td style="padding: 12px; text-align: right;">4.15</td>
                </tr>
                <tr style="background: #f8f9fa;">
                    <td style="padding: 12px;">10 кВ</td>
                    <td style="padding: 12px; text-align: right;">5.28</td>
                </tr>
                <tr>
                    <td style="padding: 12px;">0.4 кВ</td>
                    <td style="padding: 12px; text-align: right;">6.45</td>
                </tr>
            </table>
            <p><strong>Дата вступления в силу:</strong> 01 января 2025 года</p>
            <p><strong>Утверждено:</strong> Приказом Комитета по регулированию естественных монополий №245 от 15.12.2024</p>
        `
    },
    'invest-program': {
        title: 'Инвестиционная программа на 2025-2027 годы',
        content: `
            <h3>Основные направления инвестиций</h3>
            <ul style="line-height: 2;">
                <li><strong>Модернизация подстанций:</strong> 4.5 млрд тенге</li>
                <li><strong>Строительство новых линий:</strong> 3.2 млрд тенге</li>
                <li><strong>Цифровизация сетей:</strong> 2.8 млрд тенге</li>
                <li><strong>Замена оборудования:</strong> 2.1 млрд тенге</li>
            </ul>
            <p style="margin-top: 20px;"><strong>Общий объем инвестиций:</strong> 12.6 млрд тенге</p>
            <p><strong>Ожидаемые результаты:</strong></p>
            <ul style="line-height: 2;">
                <li>Повышение надежности электроснабжения до 99.9%</li>
                <li>Снижение потерь электроэнергии на 15%</li>
                <li>Подключение 250 новых потребителей</li>
            </ul>
        `
    },
    'connection-rules': {
        title: 'Правила технологического присоединения',
        content: `
            <h3>Общие положения</h3>
            <p>Технологическое присоединение осуществляется в соответствии с Правилами технологического присоединения к электрическим сетям, утвержденными приказом Министра энергетики.</p>
            <h4 style="margin-top: 20px;">Категории заявителей:</h4>
            <ul style="line-height: 2;">
                <li>Физические лица</li>
                <li>Юридические лица</li>
                <li>Индивидуальные предприниматели</li>
            </ul>
            <h4 style="margin-top: 20px;">Мощность присоединения:</h4>
            <ul style="line-height: 2;">
                <li>До 15 кВт - упрощенная процедура</li>
                <li>От 15 до 100 кВт - стандартная процедура</li>
                <li>Свыше 100 кВт - индивидуальные условия</li>
            </ul>
        `
    },
    'disclosure-standards': {
        title: 'Стандарты раскрытия информации',
        content: `
            <h3>Информация, подлежащая раскрытию</h3>
            <ul style="line-height: 2;">
                <li>Финансовая отчетность</li>
                <li>Тарифы на услуги</li>
                <li>Инвестиционные программы</li>
                <li>Технические и коммерческие потери</li>
                <li>Качество обслуживания потребителей</li>
            </ul>
            <h4 style="margin-top: 20px;">Периодичность раскрытия:</h4>
            <p>Информация размещается на официальном сайте не позднее 30 дней после окончания отчетного периода.</p>
        `
    },
    'contract-form': {
        title: 'Договор энергоснабжения (типовая форма)',
        content: `
            <h3>Типовой договор на оказание услуг по передаче электрической энергии</h3>
            <p>Данный документ содержит стандартные условия договора между АО «Энергосеть» и потребителем.</p>
            <h4 style="margin-top: 20px;">Основные разделы:</h4>
            <ol style="line-height: 2;">
                <li>Предмет договора</li>
                <li>Права и обязанности сторон</li>
                <li>Порядок расчетов</li>
                <li>Ответственность сторон</li>
                <li>Срок действия договора</li>
            </ol>
            <button onclick="alert('Функция скачивания будет доступна после интеграции с системой документооборота')" style="margin-top: 20px; padding: 12px 30px; background: #1f3c88; color: white; border: none; border-radius: 5px; cursor: pointer;">Скачать форму договора</button>
        `
    },
    'application-form': {
        title: 'Заявка на технологическое присоединение',
        content: `
            <h3>Форма заявки на технологическое присоединение</h3>
            <p>Используйте данную форму для подачи заявки на присоединение энергопринимающих устройств к электрическим сетям.</p>
            <h4 style="margin-top: 20px;">Необходимые сведения:</h4>
            <ul style="line-height: 2;">
                <li>Данные заявителя (ФИО/наименование организации)</li>
                <li>Местоположение объекта</li>
                <li>Максимальная мощность энергопринимающих устройств</li>
                <li>Категория надежности</li>
                <li>Планируемый срок ввода в эксплуатацию</li>
            </ul>
            <button onclick="alert('Форма заявки будет загружена')" style="margin-top: 20px; padding: 12px 30px; background: #1f3c88; color: white; border: none; border-radius: 5px; cursor: pointer;">Скачать форму заявки</button>
        `
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    renderNews();
    handleContactForm();
    initSmoothScroll();
    initScrollTopButton();
    animateStats();
    initActiveNavigation();
});

// Tabs System
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const parent = this.closest('section') || this.closest('.container');
            
            // Remove active class from all buttons in this section
            parent.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Remove active class from all tab panes in this section
            parent.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Add active class to corresponding tab pane
            const targetPane = parent.querySelector(`#${tabId}`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
            
            // Special handling for news tabs
            if (tabId === 'company-news' || tabId === 'technical-news') {
                renderFilteredNews(tabId);
            }
        });
    });
}

// Render News Function
function renderNews() {
    const newsListContainer = document.getElementById('newsList');
    
    if (!newsListContainer) {
        return;
    }
    
    newsListContainer.innerHTML = '';
    
    const sortedNews = newsDatabase.sort((a, b) => {
        return new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-'));
    });
    
    sortedNews.forEach(function(news, index) {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.style.animationDelay = `${index * 0.1}s`;
        newsItem.style.animation = 'fadeIn 0.6s ease-out forwards';
        newsItem.style.opacity = '0';
        
        newsItem.innerHTML = 
            '<div class="news-date">' + news.date + '</div>' +
            '<div class="news-title">' + news.title + '</div>' +
            '<div class="news-content">' + news.content + '</div>';
        
        newsListContainer.appendChild(newsItem);
    });
}

// Render Filtered News
function renderFilteredNews(tabId) {
    const category = tabId === 'company-news' ? 'company' : 'technical';
    const containerId = tabId === 'company-news' ? 'companyNewsList' : 'technicalNewsList';
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredNews = newsDatabase.filter(news => news.category === category);
    const sortedNews = filteredNews.sort((a, b) => {
        return new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-'));
    });
    
    if (sortedNews.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 40px; color: #777;">Новостей в данной категории пока нет.</p>';
        return;
    }
    
    sortedNews.forEach(function(news, index) {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.style.animationDelay = `${index * 0.1}s`;
        newsItem.style.animation = 'fadeIn 0.6s ease-out forwards';
        newsItem.style.opacity = '0';
        
        newsItem.innerHTML = 
            '<div class="news-date">' + news.date + '</div>' +
            '<div class="news-title">' + news.title + '</div>' +
            '<div class="news-content">' + news.content + '</div>';
        
        container.appendChild(newsItem);
    });
}

// Contact Form Handler
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!contactForm) {
        return;
    }
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !phone || !message) {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Пожалуйста, заполните все поля формы.';
            return;
        }
        
        console.log('Form submitted:', {
            name: name,
            email: email,
            phone: phone,
            message: message,
            timestamp: new Date().toISOString()
        });
        
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.';
        
        contactForm.reset();
        
        setTimeout(function() {
            formMessage.style.display = 'none';
        }, 5000);
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a, .footer-col a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerOffset = 100;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Scroll to Top Button
function initScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animate Statistics
function animateStats() {
    const statItems = document.querySelectorAll('.stat-item');
    let animated = false;
    
    function checkPosition() {
        if (animated) return;
        
        statItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            if (isVisible) {
                const targetCount = parseInt(item.getAttribute('data-count'));
                const numberElement = item.querySelector('.stat-number');
                
                if (targetCount && numberElement) {
                    animateNumber(numberElement, targetCount);
                    animated = true;
                }
            }
        });
    }
    
    function animateNumber(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 1000) {
                element.textContent = Math.floor(current).toLocaleString('ru-RU') + (target === 450000 ? '+' : target === 28000 ? ' км' : ' лет');
            } else {
                element.textContent = Math.floor(current) + ' лет';
            }
        }, stepTime);
    }
    
    window.addEventListener('scroll', checkPosition);
    checkPosition();
}

// Active Navigation
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    function setActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNav);
}

// Document Modal Functions
function openDocumentModal(documentId) {
    const modal = document.getElementById('documentModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    const docData = documentData[documentId];
    
    if (docData) {
        modalBody.innerHTML = `
            <h2 style="color: #1f3c88; margin-bottom: 20px;">${docData.title}</h2>
            ${docData.content}
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeDocumentModal() {
    const modal = document.getElementById('documentModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Modal Close Events
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('documentModal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeDocumentModal);
    }
    
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeDocumentModal();
            }
        });
    }
});

// Scroll to Contacts Helper
function scrollToContacts() {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
        const headerOffset = 100;
        const elementPosition = contactsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.about-card, .activity-card, .news-item, .document-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
});
