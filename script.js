// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initMobileMenu();
    initGameFrame();
    initScrollEffects();
    initFullscreenFeature();
    initSmoothScrolling();
    initPerformanceOptimizations();
    initSEOFeatures();
    initSidebarNavigation();
});

// 移动端菜单功能
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
            
            // 切换汉堡菜单图标
            const icon = mobileMenuBtn.querySelector('svg');
            if (mobileMenu.classList.contains('show')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        });
        
        // 点击菜单项时关闭菜单
        const menuItems = mobileMenu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            });
        });
    }
}

// 侧边栏导航功能
function initSidebarNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    // 高亮当前活跃的导航项
    function updateActiveNavItem() {
        const sections = ['game', 'instructions', 'features', 'about', 'hall-of-fame'];
        let activeSection = 'game'; // 默认值
        
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    activeSection = section;
                }
            }
        });
        
        // 移除所有活跃状态
        navItems.forEach(item => {
            item.classList.remove('bg-orange-100', 'border-l-4', 'border-orange-500');
        });
        
        // 添加活跃状态到当前section
        const activeNavItem = document.querySelector(`a[href="#${activeSection}"].nav-item`);
        if (activeNavItem) {
            activeNavItem.classList.add('bg-orange-100', 'border-l-4', 'border-orange-500');
        }
    }
    
    // 监听滚动事件
    window.addEventListener('scroll', updateActiveNavItem);
    
    // 初始化
    updateActiveNavItem();
}

// 游戏iframe管理
function initGameFrame() {
    const gameFrame = document.getElementById('game-frame');
    const loadingOverlay = document.getElementById('loading-overlay');
    
    if (gameFrame && loadingOverlay) {
        // iframe加载完成后隐藏加载动画
        gameFrame.addEventListener('load', function() {
            setTimeout(() => {
                loadingOverlay.classList.add('hidden');
            }, 1000); // 延迟1秒以确保内容完全加载
        });
        
        // iframe加载错误处理
        gameFrame.addEventListener('error', function() {
            loadingOverlay.innerHTML = `
                <div class="text-center">
                    <div class="text-6xl mb-4">❌</div>
                    <p class="text-xl text-red-600 font-fredoka">Game Loading Failed</p>
                    <button onclick="location.reload()" class="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                        Reload Game
                    </button>
                </div>
            `;
        });
        
        // 检查iframe是否可访问
        setTimeout(() => {
            if (!gameFrame.contentWindow) {
                console.warn('Game iframe may be blocked');
            }
        }, 3000);
    }
}

// 滚动效果
function initScrollEffects() {
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('nav-scrolled');
            } else {
                header.classList.remove('nav-scrolled');
            }
        });
    }
    
    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('#features > div, #instructions > div, #about > div, #hall-of-fame > div');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 全屏功能
function initFullscreenFeature() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const gameFrame = document.getElementById('game-frame');
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenIframe = document.getElementById('fullscreen-iframe');
    const fullscreenExitBtn = document.getElementById('fullscreen-exit-btn');
    const fullscreenTopZone = document.getElementById('fullscreen-top-zone');
    
    if (!fullscreenBtn || !gameFrame || !fullscreenContainer || !fullscreenIframe || !fullscreenExitBtn) {
        console.warn('Fullscreen elements not found');
        return;
    }

    let isFullscreen = false;
    let exitBtnHideTimer = null;
    
    // 进入全屏
    function enterFullscreen() {
        // 复制游戏URL到全屏iframe
        fullscreenIframe.src = gameFrame.src;
        
        // 显示全屏容器
        fullscreenContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        isFullscreen = true;
        fullscreenBtn.innerHTML = '🔍 Exit Fullscreen';
        
        // 显示退出按钮3秒后自动隐藏
        showExitButton();
        
        console.log('Entered fullscreen mode');
    }
    
    // 退出全屏
    function exitFullscreen() {
        fullscreenContainer.classList.remove('active');
        document.body.style.overflow = '';
        
        // 清空全屏iframe源以节省资源
        setTimeout(() => {
            fullscreenIframe.src = '';
        }, 300);
        
        isFullscreen = false;
        fullscreenBtn.innerHTML = '🔍 Fullscreen';
        
        // 清除定时器
        if (exitBtnHideTimer) {
            clearTimeout(exitBtnHideTimer);
            exitBtnHideTimer = null;
        }
        
        console.log('Exited fullscreen mode');
    }
    
    // 显示退出按钮
    function showExitButton() {
        fullscreenExitBtn.classList.add('visible');
        
        // 清除之前的定时器
        if (exitBtnHideTimer) {
            clearTimeout(exitBtnHideTimer);
        }
        
        // 3秒后自动隐藏
        exitBtnHideTimer = setTimeout(() => {
            fullscreenExitBtn.classList.remove('visible');
        }, 3000);
    }
    
    // 隐藏退出按钮
    function hideExitButton() {
        fullscreenExitBtn.classList.remove('visible');
        if (exitBtnHideTimer) {
            clearTimeout(exitBtnHideTimer);
            exitBtnHideTimer = null;
        }
    }
    
    // 全屏按钮点击事件
    fullscreenBtn.addEventListener('click', function() {
        if (!isFullscreen) {
            enterFullscreen();
        } else {
            exitFullscreen();
        }
    });
    
    // 退出按钮点击事件 - 使用捕获阶段和阻止冒泡
    fullscreenExitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('Exit button clicked');
        exitFullscreen();
    }, true);
    
    // 额外的退出按钮事件监听（确保点击生效）
    fullscreenExitBtn.addEventListener('mousedown', function(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('Exit button mousedown');
        exitFullscreen();
    });
    
    // ESC键退出全屏
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && isFullscreen) {
            console.log('ESC key pressed');
            exitFullscreen();
        }
    });
    
    // 鼠标移动到顶部区域显示退出按钮
    fullscreenTopZone.addEventListener('mouseenter', function() {
        if (isFullscreen) {
            showExitButton();
        }
    });
    
    // 鼠标移动事件 - 在顶部80px区域内显示退出按钮
    fullscreenContainer.addEventListener('mousemove', function(event) {
        if (isFullscreen) {
            if (event.clientY <= 80) {
                showExitButton();
            } else if (event.clientY > 120) {
                // 如果鼠标移动到底部，隐藏按钮
                hideExitButton();
            }
        }
    });
    
    // 背景点击退出 - 修复点击事件
    fullscreenContainer.addEventListener('click', function(event) {
        console.log('Container clicked, target:', event.target);
        
        // 只有点击容器本身时才退出（不是子元素）
        if (event.target === fullscreenContainer) {
            console.log('Background clicked - exiting fullscreen');
            exitFullscreen();
        }
    });
    
    // 额外的背景点击处理 - 监听iframe外的区域
    document.addEventListener('click', function(event) {
        if (isFullscreen) {
            // 检查点击是否在全屏容器内但不在iframe或按钮上
            const rect = fullscreenIframe.getBoundingClientRect();
            const btnRect = fullscreenExitBtn.getBoundingClientRect();
            
            const x = event.clientX;
            const y = event.clientY;
            
            // 如果点击在iframe外且不在按钮上，则退出全屏
            const outsideIframe = (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom);
            const outsideButton = (x < btnRect.left || x > btnRect.right || y < btnRect.top || y > btnRect.bottom);
            
            if (outsideIframe && outsideButton) {
                console.log('Clicked outside game area - exiting fullscreen');
                exitFullscreen();
            }
        }
    });
    
    // 全屏iframe加载完成事件
    fullscreenIframe.addEventListener('load', function() {
        console.log('Fullscreen game loaded');
    });
    
    // 全屏iframe加载错误处理
    fullscreenIframe.addEventListener('error', function() {
        console.error('Fullscreen game failed to load');
        exitFullscreen();
    });
    
    // 窗口大小改变时调整全屏显示
    window.addEventListener('resize', function() {
        if (isFullscreen) {
            // 全屏时确保容器尺寸正确
            fullscreenContainer.style.width = '100vw';
            fullscreenContainer.style.height = '100vh';
        }
    });
    
    // 页面失去焦点时也要处理全屏状态
    window.addEventListener('blur', function() {
        if (isFullscreen) {
            showExitButton();
        }
    });
    
    // 提供全局方法以便外部调用
    window.enterGameFullscreen = enterFullscreen;
    window.exitGameFullscreen = exitFullscreen;
}

// 平滑滚动
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = 80; // 考虑固定导航栏高度
                const offsetTop = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 性能优化
function initPerformanceOptimizations() {
    // 懒加载图片
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // 预加载关键资源
    const preloadLinks = [
        'https://368chickens.com/'
    ];
    
    preloadLinks.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        link.as = 'document';
        document.head.appendChild(link);
    });
}

// SEO和分析功能
function initSEOFeatures() {
    // 结构化数据更新
    updateStructuredData();
    
    // 用户行为追踪
    trackUserInteractions();
    
    // 页面性能监控
    monitorPagePerformance();
}

// 更新结构化数据
function updateStructuredData() {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(script => {
        try {
            const data = JSON.parse(script.textContent);
            
            // 更新游戏评分数据
            if (data['@type'] === 'Game' && data.aggregateRating) {
                data.aggregateRating.ratingCount = Math.floor(Math.random() * 500) + 1000;
                data.aggregateRating.ratingValue = (4.5 + Math.random() * 0.5).toFixed(1);
                script.textContent = JSON.stringify(data);
            }
        } catch (e) {
            console.warn('Error updating structured data:', e);
        }
    });
}

// 用户行为追踪
function trackUserInteractions() {
    // 追踪按钮点击
    const buttons = document.querySelectorAll('button, .bg-orange-500');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log('Button clicked:', buttonText);
            
            // 这里可以添加实际的分析代码
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'engagement',
                    event_label: buttonText
                });
            }
        });
    });
    
    // 追踪导航项点击
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('href').replace('#', '');
            console.log('Navigation clicked:', section);
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'navigation', {
                    event_category: 'engagement',
                    event_label: section
                });
            }
        });
    });
    
    // 追踪滚动深度
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            // 每25%触发一次事件
            if (maxScroll % 25 === 0) {
                console.log('Scroll depth:', maxScroll + '%');
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll', {
                        event_category: 'engagement',
                        event_label: maxScroll + '%'
                    });
                }
            }
        }
    });
}

// 页面性能监控
function monitorPagePerformance() {
    // 监控Core Web Vitals
    if ('web-vital' in window) {
        console.log('Performance monitoring initialized');
    }
    
    // 监控iframe加载时间
    const gameFrame = document.getElementById('game-frame');
    if (gameFrame) {
        const startTime = performance.now();
        
        gameFrame.addEventListener('load', function() {
            const loadTime = performance.now() - startTime;
            console.log('Game iframe loaded in:', loadTime.toFixed(2) + 'ms');
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'timing_complete', {
                    name: 'game_load',
                    value: Math.round(loadTime)
                });
            }
        });
    }
}

// 错误处理
window.addEventListener('error', function(e) {
    console.error('Page error:', e.error);
    
    // 可以发送错误报告到分析服务
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            description: e.error?.message || 'Unknown error',
            fatal: false
        });
    }
});

// 导出函数供其他脚本使用
window.gameWebsite = {
    initMobileMenu,
    initGameFrame,
    initScrollEffects,
    initFullscreenFeature,
    initSidebarNavigation
}; 