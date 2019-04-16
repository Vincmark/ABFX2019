<section class="bread-crumbs">
    <div class="bread-crumbs-wrapper">
        <ul class="bread-crumbs__list">
            <?php foreach ($breadCrumbs as $value): ?>
                <?php if($value['type'] === 'link'): ?>
                    <li class="bread-crumbs__item bread-crumbs__item-link"><a class="bread-crumbs__link" href="<?= $value['url'] ?>"><?= $value['title'] ?></a></li>
                <?php else:  ?>
                    <li class="bread-crumbs__item bread-crumbs__item-current"><?= $value['title'] ?></li>
                <?php endif; ?>
            <?php endforeach;?>
        </ul>
    </div>
</section>