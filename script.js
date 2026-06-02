// Complete Extracted Database - Organized for the Wholesale Portal
const productsData = [
    // Cosmetics
    { name: 'Anti Acne Foaming Facewash', packaging: '60 ml', category: 'Cosmetics' },
    { name: 'Anti Ageing Cream', packaging: '25/30 gm', category: 'Cosmetics' },
    { name: 'Anti dandruff Shampoo', packaging: '75/100/200 ml', category: 'Cosmetics' },
    { name: 'Facewash with Aloevera', packaging: '50/75/100 ml', category: 'Cosmetics' },
    { name: 'Moisturizing Cream', packaging: '25/30 gm', category: 'Cosmetics' },
    { name: 'Skin Whitening Cream', packaging: '25/30 gm', category: 'Cosmetics' },
    { name: 'Sunscreen SPF 30/50', packaging: '75/150 gm', category: 'Cosmetics' },
    { name: 'Vitamin C Serum', packaging: '200 ml', category: 'Cosmetics' },
    { name: 'Baby Shampoo (Sulfate free)', packaging: '100/200/300 ml', category: 'Cosmetics' },
    { name: 'Argan Oil Serum', packaging: '50/100 ml', category: 'Cosmetics' },
    
    // Herbal Products
    { name: 'Herbal Hair Oil', packaging: '250/400/500 ml', category: 'Herbal' },
    { name: 'Herbal Shampoo', packaging: '100/200 ml', category: 'Herbal' },
    { name: 'Amla Hair Oil', packaging: '250/400/500 ml', category: 'Herbal' },
    { name: 'Herbal Cough Syrup', packaging: '100 ml', category: 'Herbal' },
    { name: 'Ashwagandha Capsules', packaging: '10x10', category: 'Herbal' },
    { name: 'Memory & Concentration enhancer Capsules', packaging: '10x10', category: 'Herbal' },
    { name: 'Tulsi Capsules', packaging: '10x10', category: 'Herbal' },
    { name: 'Neem Capsules', packaging: '10x10', category: 'Herbal' },
    { name: 'Shilajit Capsules', packaging: '10x10', category: 'Herbal' },
    
    // Nutraceuticals
    { name: 'Calcium Carbonate 1.25 gm with Vitamin D3 200 I.U. Tablets', packaging: '10x15', category: 'Nutraceuticals' },
    { name: 'Cyproheptadin 4 mg Tab Tablets', packaging: '10x10', category: 'Nutraceuticals' },
    { name: 'Multivitamin + Cyprheptadine Tablets', packaging: '3x10', category: 'Nutraceuticals' },
    { name: 'Cod liver Oil capsule 1000 mg soft gel', packaging: '2x15', category: 'Nutraceuticals' },
    { name: 'Vitamin E 400mg Soft Gel Capsules', packaging: '2x12', category: 'Nutraceuticals' },
    { name: 'Calcium, Vitamin & Mineral Supplement Syrup', packaging: '250 ml', category: 'Nutraceuticals' },
    { name: 'Digestive Enzyme with Vitamin Syrup', packaging: '200 ml', category: 'Nutraceuticals' },
    { name: 'Multivitamin + Lycopene Syrup', packaging: '200 ml', category: 'Nutraceuticals' },
    
    // Medical Supplies & Surgicals
    { name: 'Syringes, cannulas, and needles – all sizes and types', packaging: '1\'S', category: 'Medical Supplies & Surgicals' },
    { name: 'Catheters – all sizes and types', packaging: '1\'S', category: 'Medical Supplies & Surgicals' },
    { name: 'IV sets, bags', packaging: '1\'S', category: 'Medical Supplies & Surgicals' },
    { name: 'Disposable latex, nitrile, polyethylene, vinyl gloves', packaging: '100 Nos', category: 'Medical Supplies & Surgicals' },
    { name: 'Medical gowns, scrubs, aprons, uniforms, lab coats', packaging: '1\'S', category: 'Medical Supplies & Surgicals' },
    { name: 'Dental instruments – all types and sizes', packaging: '1\'S', category: 'Medical Supplies & Surgicals' },
    
    // Pharmaceuticals
    { name: 'Aceclofenac 100 mg + Paracetamol 500 mg Tablets', packaging: '10x10', category: 'Pharmaceuticals' },
    { name: 'Diclofenac Sodium 50/100 mg Tablets', packaging: '10X10', category: 'Pharmaceuticals' },
    { name: 'Amoxycillin 500 mg + Clavulanic Acid 125 mg Tablets', packaging: '1x6', category: 'Pharmaceuticals' },
    { name: 'Azithromycin 250 mg Tablets', packaging: '10x6', category: 'Pharmaceuticals' },
    { name: 'Amlodipine 5 mg', packaging: '10x10', category: 'Pharmaceuticals' },
    { name: 'Omeprazole 20 mg Capsules', packaging: '10x10', category: 'Pharmaceuticals' },
    { name: 'Pantoprazole 40 mg +Domperidone 30 mg (SR)', packaging: '10x10', category: 'Pharmaceuticals' },
    { name: 'Atorvastatin 10 mg', packaging: '10x10', category: 'Pharmaceuticals' }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Drawer Logic ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if(mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active-menu');
            mobileBtn.classList.toggle('active-menu');
            // Prevent body scroll when menu is open
            document.body.style.overflow = navLinks.classList.contains('active-menu') ? 'hidden' : 'auto';
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active-menu');
                mobileBtn.classList.remove('active-menu');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // --- 2. Header Scroll Effect ---
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 3. Scroll Reveal Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide-up').forEach(element => {
        observer.observe(element);
    });

    // --- 4. Animated Number Counters ---
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                const duration = 2000; // 2 seconds animation
                const increment = target / (duration / 16); 
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        entry.target.innerText = Math.ceil(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        entry.target.innerText = target + '+';
                    }
                };
                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // --- 5. Dynamic Product Catalog Logic ---
    const tableBody = document.getElementById('product-table-body');
    if (tableBody) {
        const searchInput = document.getElementById('productSearch');
        const categoryLinks = document.querySelectorAll('#category-filter a');
        let currentCategory = 'All';
        
        function renderTable(data) {
            tableBody.innerHTML = '';
            if (data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="3" class="text-center" style="padding: 4rem;">No formulations found matching your search criteria. Please contact our manufacturing desk for custom synthesis.</td></tr>';
                return;
            }
            
            data.forEach(product => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td style="color: #0A192F; font-weight: 600; font-size: 1.05rem;">${product.name}</td>
                    <td style="color: #64748b;">${product.packaging}</td>
                    <td><span style="background: rgba(212, 175, 55, 0.1); color: #aa8929; padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; border: 1px solid rgba(212, 175, 55, 0.3); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; white-space: nowrap;">${product.category}</span></td>
                `;
                tableBody.appendChild(tr);
            });
        }
        
        function filterData() {
            const searchTerm = searchInput.value.toLowerCase();
            const filtered = productsData.filter(p => {
                const matchesSearch = p.name.toLowerCase().includes(searchTerm) || p.packaging.toLowerCase().includes(searchTerm);
                const matchesCategory = currentCategory === 'All' || p.category === currentCategory;
                return matchesSearch && matchesCategory;
            });
            renderTable(filtered);
        }

        renderTable(productsData);
        
        searchInput.addEventListener('input', filterData);
        
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                categoryLinks.forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
                
                currentCategory = e.target.getAttribute('data-filter');
                filterData();
            });
        });
    }
});