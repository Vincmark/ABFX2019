<section class="portfolio">
    <div class="portfolio-wrapper">
        <h2 class="portfolio__header header2">Selected works</h2>
        <ul class="portfolio__list">
            <?php foreach ($portfolioList as $item): ?>
                <li class="portfolio__item"><a href="<?= '/portfolio/'.$item['uri']?>"><img class="portfolio__item-image" src="<?= $imgPath.$item['previewImg']?>" alt=""></a></li>
            <?php endforeach; ?>
        </ul>
        <button class="portfolio__show-more-button button-solid">Show more</button>
    </div>
</section>
