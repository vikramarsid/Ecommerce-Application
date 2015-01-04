exports.SELECT_PRODUCT_QUERY	= "Select distinct p_type, p_category from ebay.product";
exports.SELECT_CAT_QUERY	= "SELECT distinct(p_category) FROM ebay.product";
exports.SELECT_SELLER_QUERY	= "SELECT * FROM ebay.seller S, ebay.product P where S.p_id=P.p_id;";
exports.SELECT_COUNT_QUERY	= "select * from ebay.person where email in (SELECT DIStinct(s_email) FROM ebay.seller);";

