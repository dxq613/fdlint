(function(e,d){var f=d.widget.InstantValidator,b=d.mod.unit.Paging,c=d.mod.unit.Offers;var a={init:function(g){this.div=g;this.initSearch();this.initFolding();this.initFilters();this.initPaging()},initSearch:function(){var g=e("input.price-low , input.price-high",this.div);f.validate(g,"price")},initFolding:function(){var i=this.div,h=e("div.wp-cat-path,div.wp-category-nav-unit",i),g=e("a.offer-list-folding",i);g.toggle(function(){h.css("display","none");e(this).addClass("plus").removeClass("minus");return false},function(){h.css("display","block");e(this).removeClass("plus").addClass("minus");return false})},initFilters:function(){var g=e("div.wp-offerlist-view-setting",this.div);c.initFiltersPanel(g)},initPaging:function(){var g=e("div.wp-paging-unit",this.div);new b(g)}};d.ModContext.register("wp-all-offer-column",a)})(jQuery,Platform.winport);