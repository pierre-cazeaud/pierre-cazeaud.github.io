<?php include('_includes/header.php') ?>
    
    <!-- Banner -->
    <div class="banner" id="home-banner">
        <h1>Pierre Cazeaud</h1>
        <h2>Développeur web</h2>
        <p>Je développe des sites et applications web.<br>Pour moi, chaque projet est différent et est une nouvelle occasion d’apprendre.</p>
        <div class="arrow-nav">
            <span></span>
            <span></span>
        </div>
    </div>

	<div class="container" id="home-page">
        <!-- My works -->
        <article class="main-block" id="my-works">
            <h2 class="main-block-title">Mes projets</h2>
            <p class="main-block-subtitle">Ci-dessous vous trouvez quelques uns de mes projets favoris mis en situation.</p>
    
            <!-- Swiper -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <picture>
                            <source srcset="img/slider-peexeo-md.jpg" media="(min-width: 769px)">
                            <source srcset="img/slider-peexeo-sm.jpg" media="(min-width: 482px)">
                            <img src="img/slider-peexeo.jpg" alt="Peexeo aperçu">
                        </picture>
                    </div>
                    <div class="swiper-slide">
                        <picture>
                            <source srcset="img/slider-denis_pommier-md.jpg" media="(min-width: 769px)">
                            <source srcset="img/slider-denis_pommier-sm.jpg" media="(min-width: 482px)">
                            <img src="img/slider-denis_pommier.jpg" alt="Peexeo aperçu">
                        </picture>
                    </div>
                    <div class="swiper-slide">
                        <picture>
                            <source srcset="img/single-cj_blog-mockup-md.jpg" media="(min-width: 769px)">
                            <source srcset="img/single-cj_blog-mockup-sm.jpg" media="(min-width: 482px)">
                            <img src="img/single-cj_blog-mockup.jpg" alt="Peexeo aperçu">
                        </picture>
                    </div>
                </div>
            </div>
            <a href="work.php" class="btn">Voir tous les projets</a>
        </article>
    </div>

    <!-- Contact -->
    <article class="main-block" id="contact">
        <h2 class="main-block-title">Contact</h2>
        <p class="main-block-subtitle">Vous souhaitez me poser une question ?<br>Vous recherchez un stagiaire spécialisé dans le développement web ?</p>
        <a href="mailto:pierre.cazeaud@gmail.com" class="btn btn-white">Me contacter</a>
    </article>

   

<?php include('_includes/footer.php') ?>


<!-- Initialize Swiper -->
    <script>
     var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 4000,
        autoHeight: true,
    });
    </script>

