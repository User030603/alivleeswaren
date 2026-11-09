    const WHATSAPP_NUMBER = "32470123456";
    const CUSTOMER_EMAIL = "info@alivleeswaren.be";
    const STORAGE_KEY = "aliVleeswarenProducts_v4";
    const LEADS_KEY = "aliVleeswarenLeads_v1";
    const ADMIN_SESSION_KEY = "aliVleeswarenAdminSession";
    const ADMIN_USER = "Ali";
    const ADMIN_PASSWORD_HASH = "7bb9445b200afac21f8d436a92bfac33c1710050bba46571b3123ba51b10454c";
    const ADMIN_HASHES = ["#ali-beheer", "#admin"];
    const WELCOME_DISCOUNT = 8;
    const WELCOME_CODE = "WELKOM8";
    const SUPPORTED_LANGUAGES = ["nl", "fr", "en", "tr", "ar"];
    const I18N = window.ALI_I18N || {};
    const ASSET_BASE = document.documentElement.dataset.assetBase || "";
    const PAGE_LANGUAGE = document.documentElement.dataset.pageLanguage || "nl";
    const IS_ADMIN_PAGE = document.body?.dataset.adminPage === "true";
    const UNIT_KEYS = {
      "per kg": "perkg",
      "5 kg doos": "box5",
      "10 kg doos": "box10",
      "20 kg karton": "box20",
      "1 kg zak": "bag1",
      "5 kg emmer": "bucket5",
      "10 kg karton": "carton10",
      "12 x 1 kg karton": "pack12"
    };

    let activeLanguage = "nl";

    const interpolate = (template, values = {}) => String(template || "").replace(/\{(\w+)\}/g, (match, key) => (
      Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : match
    ));

    const getTranslation = (language, key, values = {}) => {
      const dictionary = I18N[language] || I18N.nl || {};
      const fallback = I18N.nl || {};
      return interpolate(dictionary[key] ?? fallback[key] ?? key, values);
    };

    const t = (key, values = {}) => getTranslation(activeLanguage, key, values);

    const resolveAsset = (value) => {
      const path = String(value || "");
      if (!path || /^(?:https?:|data:|\/\/)/i.test(path)) return path;
      return `${ASSET_BASE}${path}`;
    };

    const trackEvent = (eventName, parameters = {}) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...parameters });
    };

    const getUnitLabel = (unit) => {
      const key = UNIT_KEYS[unit];
      return key ? t(`units.${key}`) : unit;
    };

    const categories = {
      all: { label: "Alle Producten", short: "Alle", icon: "fa-solid fa-layer-group" },
      rund: { label: "Rundvlees", short: "Rund", icon: "fa-solid fa-cow", image: "images/beef.jpg" },
      lam: { label: "Lamsvlees", short: "Lam", icon: "fa-solid fa-utensils", image: "images/lamb.jpg" },
      kip: { label: "Kip & Gevogelte", short: "Kip", icon: "fa-solid fa-drumstick-bite", image: "images/chicken.jpg" },
      charcuterie: { label: "Vleeswaren & Charcuterie", short: "Charcuterie", icon: "fa-solid fa-bacon", image: "images/charcuterie.jpg" },
      diepvries: { label: "Diepvries & Voorraad", short: "Diepvries", icon: "fa-solid fa-snowflake", image: "images/frozen.jpg" },
      kruiden: { label: "Kruiden & Specerijen", short: "Kruiden", icon: "fa-solid fa-pepper-hot", image: "images/spices.jpg" },
      sauzen: { label: "Marinades & Sauzen", short: "Sauzen", icon: "fa-solid fa-bottle-droplet", image: "images/marinades.jpg" },
      grootverbruik: { label: "Grootverbruik & Karton", short: "Grootverbruik", icon: "fa-solid fa-boxes-stacked", image: "images/bulk.jpg" }
    };

    const PRODUCT_IMAGES = {
      p1: "images/products/01-rundvlees-kwartier.jpg",
      p2: "images/products/02-entrecote.jpg",
      p3: "images/products/03-ribeye.jpg",
      p4: "images/products/04-ossenhaas.jpg",
      p5: "images/products/05-kogelbiefstuk.jpg",
      p6: "images/products/06-runderstoofvlees.jpg",
      p7: "images/products/07-rundergehakt.jpg",
      p8: "images/products/08-runderbraadstuk.jpg",
      p9: "images/products/09-runderlever.jpg",
      p10: "images/products/10-hele-lam.jpg",
      p11: "images/products/11-lamsbout.jpg",
      p12: "images/products/12-lamsrack.jpg",
      p13: "images/products/13-lamsschouder.jpg",
      p14: "images/products/14-lamsstoofvlees.jpg",
      p15: "images/products/15-lamsgehakt.jpg",
      p16: "images/products/16-lamslever.jpg",
      p17: "images/products/17-hele-kip.jpg",
      p18: "images/products/18-kipfilet.jpg",
      p19: "images/products/19-kipdijfilet.jpg",
      p20: "images/products/20-kippendrumsticks.jpg",
      p21: "images/products/21-kippenvleugels.jpg",
      p22: "images/products/22-kipspies.jpg",
      p23: "images/products/23-kippenlever.jpg",
      p24: "images/products/24-halal-sucuk.jpg",
      p25: "images/products/25-halal-salam.jpg",
      p26: "images/products/26-halal-pastirma.jpg",
      p27: "images/products/27-halal-droge-worst.jpg",
      p28: "images/products/28-halal-kipworst.jpg",
      p29: "images/products/29-halal-rookworst.jpg",
      p30: "images/products/30-charcuterie-mix.jpg",
      p31: "images/products/31-diepvries-rundvlees.jpg",
      p32: "images/products/32-diepvries-lamsvlees.jpg",
      p33: "images/products/33-diepvries-kipfilet.jpg",
      p34: "images/products/34-diepvries-gehakt.jpg",
      p35: "images/products/35-diepvries-kebabvlees.jpg",
      p36: "images/products/36-zwarte-peper-gemalen.jpg",
      p37: "images/products/37-witte-peper-gemalen.jpg",
      p38: "images/products/38-rode-peper-gemalen.jpg",
      p39: "images/products/39-cayennepeper.jpg",
      p40: "images/products/40-zwarte-peperkorrels.jpg",
      p41: "images/products/41-paprikapoeder-zoet.jpg",
      p42: "images/products/42-paprikapoeder-scherp.jpg",
      p43: "images/products/43-chili-vlokken.jpg",
      p44: "images/products/44-pul-biber.jpg",
      p45: "images/products/45-isot-peper.jpg",
      p46: "images/products/46-sucukkruiden.jpg",
      p47: "images/products/47-kebabkruiden.jpg",
      p48: "images/products/48-gehaktkruiden.jpg",
      p49: "images/products/49-kippenkruiden.jpg",
      p50: "images/products/50-bbq-rub.jpg",
      p51: "images/products/51-komijn-gemalen.jpg",
      p52: "images/products/52-koriander-gemalen.jpg",
      p53: "images/products/53-knoflookpoeder.jpg",
      p54: "images/products/54-uienpoeder.jpg",
      p55: "images/products/55-oregano.jpg",
      p56: "images/products/56-gedroogde-munt.jpg",
      p57: "images/products/57-kaneel-gemalen.jpg",
      p58: "images/products/58-nootmuskaat-gemalen.jpg",
      p59: "images/products/59-laurierblad.jpg",
      p60: "images/products/60-gemberpoeder.jpg",
      p61: "images/products/61-kurkuma.jpg",
      p62: "images/products/62-currypoeder.jpg",
      p63: "images/products/63-gemengde-kruiden.jpg",
      p64: "images/products/64-knoflookmarinade.jpg",
      p65: "images/products/65-paprikamarinade.jpg",
      p66: "images/products/66-kebabmarinade.jpg",
      p67: "images/products/67-sucukmarinade.jpg",
      p68: "images/products/68-bbq-marinade.jpg",
      p69: "images/products/69-citroen-kruidenmarinade.jpg",
      p70: "images/products/70-rundvleespakket-10kg.jpg",
      p71: "images/products/71-lamsvleespakket-10kg.jpg",
      p72: "images/products/72-kipfiletpakket-10kg.jpg",
      p73: "images/products/73-gemengd-grillpakket-10kg.jpg",
      p74: "images/products/74-beenhouwers-startpakket-20kg.jpg",
      p75: "images/products/75-halal-snackpakket-10kg.jpg",
      p76: "images/products/76-kruidenpakket-beenhouwer.jpg"
    };

    const productSeed = [
      ["p1", "Rundvlees voor- en achterkwartier", "rund", 8.9, "per kg", "Vers rundvlees van erkende slachthuizen. Per kg of per doos van 10 kg.", true, 1700000003000],
      ["p2", "Entrecôte", "rund", 18.9, "per kg", "Rijk dooraderde entrecôte, geschikt voor beenhouwers en horeca.", false, 0],
      ["p3", "Ribeye", "rund", 21.9, "per kg", "Volle smaak en mooie dooradering. Per kg of per 5 kg doos.", false, 0],
      ["p4", "Ossenhaas", "rund", 34.9, "per kg", "Mals ossenhaas, vers of diepvries. Prijs op basis van volume.", false, 0],
      ["p5", "Kogelbiefstuk", "rund", 16.9, "per kg", "Verse kogelbiefstuk voor de betere slagerij en horecakeuken.", false, 0],
      ["p6", "Runderstoofvlees", "rund", 9.9, "per kg", "Geschikt voor stoofgerechten, tajine en grootkeuken.", false, 0],
      ["p7", "Rundergehakt 100% rund", "rund", 8.5, "per kg", "Puur rundergehakt zonder vulmiddelen. Per kg of 10 kg doos.", false, 0],
      ["p8", "Runderbraadstuk", "rund", 11.5, "per kg", "Stevig braadstuk voor beenhouwers en traiteurs.", false, 0],
      ["p9", "Runderlever", "rund", 6.5, "per kg", "Verse runderlever, per kg of per 5 kg doos.", false, 0],
      ["p10", "Hele lam", "lam", 8.9, "per kg", "Hele lam beschikbaar per kg of per volledige doos.", false, 0],
      ["p11", "Lamsbout", "lam", 14.9, "per kg", "Malse lamsbout, met of zonder been, per kg.", false, 0],
      ["p12", "Lamsrack", "lam", 16.5, "per kg", "Lamsrack voor horeca en fijnslagerij, per kg.", false, 0],
      ["p13", "Lamsschouder", "lam", 11.9, "per kg", "Lamsschouder voor stoofgerechten en grill, per kg.", false, 0],
      ["p14", "Lamsstoofvlees", "lam", 10.9, "per kg", "Mals lamsvlees voor stoofschotels en tajine.", false, 0],
      ["p15", "Lamsgehakt", "lam", 9.9, "per kg", "Lamsgehakt voor kofta, burgers en vullingen.", false, 0],
      ["p16", "Lamslever", "lam", 7.5, "per kg", "Verse lamslever, per kg of per 5 kg doos.", false, 0],
      ["p17", "Hele kip", "kip", 4.5, "per kg", "Hele halal kip, per kg of per 10 kg doos.", false, 0],
      ["p18", "Kipfilet", "kip", 6.9, "per kg", "Halal kipfilet, per kg of per 10 kg doos.", false, 0],
      ["p19", "Kipdijfilet", "kip", 5.9, "per kg", "Malse kipdijfilet voor horeca en kebabzaken.", false, 0],
      ["p20", "Kippendrumsticks", "kip", 27.5, "5 kg doos", "Halal kippendrumsticks, verpakt per 5 kg doos.", false, 0],
      ["p21", "Kippenvleugels", "kip", 22.5, "5 kg doos", "Halal kippenvleugels, per 5 kg doos of per 10 kg karton.", false, 0],
      ["p22", "Kipspies gemarineerd", "kip", 39.5, "5 kg doos", "Gemarineerde kipspies met paprika en kruiden, per 5 kg doos.", false, 0],
      ["p23", "Kippenlever", "kip", 3.9, "per kg", "Verse kippenlever, per kg of per 5 kg doos.", false, 0],
      ["p24", "Halal sucuk", "charcuterie", 9.5, "per kg", "Halal sucuk voor beenhouwers en horeca, per kg of per 5 kg doos.", false, 0],
      ["p25", "Halal salam", "charcuterie", 8.5, "per kg", "Halal salam, snijbaar of heel, per kg.", false, 0],
      ["p26", "Halal pastırma", "charcuterie", 18.9, "per kg", "Halal pastırma, per kg of per 5 kg doos.", false, 0],
      ["p27", "Halal droge worst", "charcuterie", 12.5, "per kg", "Halal droge worst met pittige kruiding, per kg.", false, 0],
      ["p28", "Halal kipworst", "charcuterie", 7.9, "per kg", "Halal kipworst voor broodjes en horeca, per kg.", false, 0],
      ["p29", "Halal rookworst", "charcuterie", 8.9, "per kg", "Halal rookworst, per kg of per 5 kg doos.", false, 0],
      ["p30", "Charcuterie mix", "charcuterie", 49.5, "5 kg doos", "Gemengde halal charcuterie: sucuk, salam, worst en pastırma.", false, 0],
      ["p31", "Diepvries rundvlees", "diepvries", 79, "10 kg doos", "Diepgevroren rundvlees, ideaal als voorraad voor beenhouwers.", false, 0],
      ["p32", "Diepvries lamsvlees", "diepvries", 89, "10 kg doos", "Diepgevroren lamsvlees, per 10 kg doos.", false, 0],
      ["p33", "Diepvries kipfilet", "diepvries", 62, "10 kg doos", "Diepgevroren halal kipfilet, per 10 kg doos.", false, 0],
      ["p34", "Diepvries gehakt", "diepvries", 72, "10 kg doos", "Diepgevroren rundergehakt, per 10 kg doos.", false, 0],
      ["p35", "Diepvries kebabvlees", "diepvries", 84, "10 kg doos", "Diepgevroren kebabvlees voor horeca en snackbars.", false, 0],
      ["p36", "Zwarte peper gemalen", "kruiden", 12.9, "1 kg zak", "Fijngemalen zwarte peper. Ook per 5 kg of 10 kg karton.", false, 0],
      ["p37", "Witte peper gemalen", "kruiden", 14.5, "1 kg zak", "Fijngemalen witte peper voor worst, salami en sauzen.", false, 0],
      ["p38", "Rode peper gemalen", "kruiden", 9.9, "1 kg zak", "Gemalen rode peper met een pittige, warme smaak.", false, 0],
      ["p39", "Cayennepeper", "kruiden", 11.5, "1 kg zak", "Cayennepeper voor pittige marinades en kruidenmengsels.", false, 0],
      ["p40", "Zwarte peperkorrels", "kruiden", 13.9, "1 kg zak", "Hele zwarte peperkorrels voor vers malen.", false, 0],
      ["p41", "Paprikapoeder zoet", "kruiden", 8.9, "1 kg zak", "Zoete paprikapoeder voor marinades, worst en kebab.", false, 0],
      ["p42", "Paprikapoeder scherp", "kruiden", 9.5, "1 kg zak", "Scherpe paprikapoeder voor pittige gerechten.", false, 0],
      ["p43", "Chili vlokken", "kruiden", 10.9, "1 kg zak", "Gedroogde chili vlokken voor pizza, kebab en sauzen.", false, 0],
      ["p44", "Pul biber", "kruiden", 11.9, "1 kg zak", "Turkse pul biber, grof gemalen en licht pittig.", true, 1700000002000],
      ["p45", "Isot peper", "kruiden", 13.5, "1 kg zak", "Donkere, rokerige isot peper voor authentieke smaak.", false, 0],
      ["p46", "Sucukkruiden", "kruiden", 12.5, "1 kg zak", "Kant-en-klaar kruidenmengsel voor halal sucuk.", false, 0],
      ["p47", "Kebabkruiden", "kruiden", 9.9, "1 kg zak", "Kruidenmengsel voor kip-, lam- en runderkebab.", false, 0],
      ["p48", "Gehaktkruiden", "kruiden", 8.9, "1 kg zak", "Kruidenmengsel voor gehaktballen en burgers.", false, 0],
      ["p49", "Kippenkruiden", "kruiden", 8.5, "1 kg zak", "Kruidenmengsel voor kip en gevogelte.", false, 0],
      ["p50", "BBQ-rub", "kruiden", 9.5, "1 kg zak", "Rokerige BBQ-rub voor vlees en grillgerechten.", false, 0],
      ["p51", "Komijn gemalen", "kruiden", 9.9, "1 kg zak", "Gemalen komijn voor kebab, stoofvlees en worst.", false, 0],
      ["p52", "Koriander gemalen", "kruiden", 8.9, "1 kg zak", "Gemalen koriander voor kruidenmengsels en marinades.", false, 0],
      ["p53", "Knoflookpoeder", "kruiden", 7.9, "1 kg zak", "Knoflookpoeder voor marinades, sauzen en rubs.", false, 0],
      ["p54", "Uienpoeder", "kruiden", 7.5, "1 kg zak", "Uienpoeder voor vlees, sauzen en kruidenmengsels.", false, 0],
      ["p55", "Oregano", "kruiden", 9.5, "1 kg zak", "Gedroogde oregano voor mediterrane marinades.", false, 0],
      ["p56", "Gedroogde munt", "kruiden", 10.5, "1 kg zak", "Gedroogde munt voor lamsvlees en kruidenmengsels.", false, 0],
      ["p57", "Kaneel gemalen", "kruiden", 8.9, "1 kg zak", "Gemalen kaneel voor zoete en hartige bereidingen.", false, 0],
      ["p58", "Nootmuskaat gemalen", "kruiden", 14.9, "1 kg zak", "Gemalen nootmuskaat voor worst en sauzen.", false, 0],
      ["p59", "Laurierblad", "kruiden", 11.5, "1 kg zak", "Gedroogde laurierbladen voor bouillon en stoofgerechten.", false, 0],
      ["p60", "Gemberpoeder", "kruiden", 9.9, "1 kg zak", "Gemalen gember voor marinades en kruidenmengsels.", false, 0],
      ["p61", "Kurkuma", "kruiden", 8.5, "1 kg zak", "Gemalen kurkuma voor kleur en smaak.", false, 0],
      ["p62", "Currypoeder", "kruiden", 8.9, "1 kg zak", "Currypoeder voor sauzen en gemengde gerechten.", false, 0],
      ["p63", "Gemengde kruiden", "kruiden", 7.9, "1 kg zak", "Allround kruidenmengsel voor vlees en groenten.", false, 0],
      ["p64", "Knoflookmarinade", "sauzen", 24.9, "5 kg emmer", "Knoflookmarinade voor kip, lam en rundvlees.", false, 0],
      ["p65", "Paprikamarinade", "sauzen", 23.9, "5 kg emmer", "Paprikamarinade met een zoete en pittige smaak.", false, 0],
      ["p66", "Kebabmarinade", "sauzen", 25.9, "5 kg emmer", "Kebabmarinade voor kip-, lam- en runderkebab.", false, 0],
      ["p67", "Sucukmarinade", "sauzen", 26.9, "5 kg emmer", "Speciale marinade voor sucuk en worstbereiding.", false, 0],
      ["p68", "BBQ-marinade", "sauzen", 24.5, "5 kg emmer", "Rokerige BBQ-marinade voor grill en oven.", false, 0],
      ["p69", "Citroen-kruidenmarinade", "sauzen", 22.9, "5 kg emmer", "Frisse citroen-kruidenmarinade voor kip en vis.", false, 0],
      ["p70", "Rundvleespakket 10 kg", "grootverbruik", 89, "10 kg karton", "Gemengd rundvleespakket voor beenhouwers en horeca.", true, 1700000001000],
      ["p71", "Lamsvleespakket 10 kg", "grootverbruik", 99, "10 kg karton", "Gemengd lamsvleespakket, per 10 kg karton.", false, 0],
      ["p72", "Kipfiletpakket 10 kg", "grootverbruik", 69, "10 kg karton", "Halal kipfilet in grootverpakking, per 10 kg karton.", false, 0],
      ["p73", "Gemengd grillpakket 10 kg", "grootverbruik", 94, "10 kg karton", "Rund, lam en kip, klaar voor grill en horeca.", false, 0],
      ["p74", "Beenhouwers-startpakket 20 kg", "grootverbruik", 169, "20 kg karton", "Compleet startpakket met rund, lam en kip voor beenhouwers.", false, 0],
      ["p75", "Halal snackpakket 10 kg", "grootverbruik", 79, "10 kg karton", "Snackpakket met kipnuggets, burgers en kebabvlees.", false, 0],
      ["p76", "Kruidenpakket beenhouwer", "grootverbruik", 149, "12 x 1 kg karton", "Twaalf essentiële kruiden voor worst, sucuk en gehakt.", false, 0]
    ];

    const initialProducts = productSeed.map(([id, name, category, price, unit, description, promo, promotedAt], index) => ({
      id,
      name,
      category,
      price,
      unit,
      description,
      promo: Boolean(promo),
      promotedAt: promo ? promotedAt : 0,
      createdAt: 1700000000000 - index * 1000,
      image: PRODUCT_IMAGES[id] || categories[category].image
    }));

    const formatPrice = (value) => `€ ${Number(value).toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);

    const getCategory = (key) => categories[key] || categories.rund;

    const getCategoryLabel = (key) => t(`categories.${key}`) || categories[key]?.label || key;

    const getProductDescription = (product) => {
      if (activeLanguage === "nl" && product.description) return product.description;
      return `${getCategoryLabel(product.category)} — ${t("product.genericDescription")}`;
    };

    const cloneInitialProducts = () => initialProducts.map((product) => ({ ...product }));

    const normalizeProduct = (product) => {
      const category = categories[product?.category] ? product.category : "rund";
      const price = Number(product?.price);
      return {
        id: String(product?.id || `p-${Date.now()}-${Math.floor(Math.random() * 999)}`),
        name: String(product?.name || "Naamloos product"),
        category,
        price: Number.isFinite(price) && price > 0 ? price : 0,
        unit: String(product?.unit || "per kg"),
        description: String(product?.description || ""),
        promo: Boolean(product?.promo),
        promotedAt: Number(product?.promotedAt) || 0,
        createdAt: Number(product?.createdAt) || Date.now(),
        image: String(product?.image || getCategory(category).image)
      };
    };

    const loadProducts = () => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (!stored) return cloneInitialProducts();
        const parsed = JSON.parse(stored);
        if (!Array.isArray(parsed)) return cloneInitialProducts();
        return parsed.map(normalizeProduct);
      } catch (error) {
        return cloneInitialProducts();
      }
    };

    let products = loadProducts();
    let activeCategory = "all";
    let toastTimer = null;

    const saveProducts = () => {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
      } catch (error) {
        showToast("Lokale opslag niet beschikbaar", "De wijzigingen blijven actief tot u de pagina herlaadt.", "error");
      }
    };

    const getSortedProducts = () => [...products].sort((first, second) => {
      if (first.promo !== second.promo) return first.promo ? -1 : 1;
      if (first.promo && second.promo) return (second.promotedAt || 0) - (first.promotedAt || 0);
      return (second.createdAt || 0) - (first.createdAt || 0);
    });

    const getActivePromos = () => getSortedProducts().filter((product) => product.promo);

    const getProductName = (product) => {
      const names = window.ALI_PRODUCT_NAMES && window.ALI_PRODUCT_NAMES[activeLanguage];
      if (names && product && names[product.id]) return names[product.id];
      return product ? product.name : "";
    };

    const getWhatsAppLink = (product) => {
      const message = t("wa.product", {
        name: getProductName(product),
        price: formatPrice(product.price),
        unit: getUnitLabel(product.unit)
      });
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    };

    const getFallbackImage = (product) => getCategory(product.category).image;

    const showToast = (title, message, type = "success") => {
      const toast = document.getElementById("toast");
      const icon = document.getElementById("toastIcon");
      if (!toast || !icon) return;
      clearTimeout(toastTimer);
      document.getElementById("toastTitle").textContent = title;
      document.getElementById("toastMessage").textContent = message;
      toast.classList.toggle("error", type === "error");
      icon.innerHTML = type === "error"
        ? '<i class="fa-solid fa-triangle-exclamation"></i>'
        : '<i class="fa-solid fa-check"></i>';
      toast.classList.add("show");
      toastTimer = window.setTimeout(() => toast.classList.remove("show"), 4200);
    };

    const updateTicker = () => {
      const ticker = document.getElementById("tickerPromoText");
      if (!ticker) return;
      const promos = getActivePromos();
      if (!promos.length) {
        ticker.textContent = t("promo.tickerEmpty");
        return;
      }
      const preview = promos.slice(0, 2).map((product) => `${getProductName(product)} ${formatPrice(product.price)}`).join(" • ");
      ticker.textContent = `${t("promo.tickerNew")}: ${preview}${promos.length > 2 ? ` • +${promos.length - 2}` : ""}`;
    };

    const renderPromos = (flashId = null) => {
      const grid = document.getElementById("promoGrid");
      const empty = document.getElementById("promoEmpty");
      const count = document.getElementById("promoCount");
      if (!grid || !empty || !count) return;

      const promos = getActivePromos().slice(0, 6);
      count.textContent = promos.length;

      if (!promos.length) {
        grid.innerHTML = "";
        empty.classList.add("show");
        updateTicker();
        return;
      }

      empty.classList.remove("show");
      grid.innerHTML = promos.map((product) => {
        const category = getCategory(product.category);
        const fallback = getFallbackImage(product);
        const description = getProductDescription(product);
        const unit = getUnitLabel(product.unit);
        return `
          <article class="promo-card" data-promo-id="${escapeHTML(product.id)}">
            <div class="promo-media">
              <img src="${escapeHTML(resolveAsset(product.image))}" alt="${escapeHTML(getProductName(product))}" loading="lazy" data-fallback="${escapeHTML(resolveAsset(fallback))}">
              <span class="promo-flag"><i class="fa-solid fa-bolt"></i> ${escapeHTML(t("promo.flag"))}</span>
              <div class="promo-price">
                <small>${escapeHTML(t("promo.actionPrice"))}</small>
                <strong>${formatPrice(product.price)}</strong>
                <span>${escapeHTML(unit)}</span>
              </div>
            </div>
            <div class="promo-body">
              <span class="promo-category"><i class="${category.icon}"></i> ${escapeHTML(getCategoryLabel(product.category))}</span>
              <h3>${escapeHTML(getProductName(product))}</h3>
              <p>${escapeHTML(description)}</p>
              <div class="promo-actions">
                <span class="promo-weight"><i class="fa-solid fa-weight-hanging"></i> ${escapeHTML(unit)}</span>
                <a href="${getWhatsAppLink(product)}" target="_blank" rel="noopener noreferrer" class="promo-link">${escapeHTML(t("product.request"))} <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </article>
        `;
      }).join("");

      updateTicker();

      if (flashId) {
        const escapedId = String(flashId).replace(/"/g, "");
        const newCard = grid.querySelector(`[data-promo-id="${escapedId}"]`);
        if (newCard) newCard.classList.add("flash");
      }
    };

    const renderFilters = () => {
      const filterPills = document.getElementById("filterPills");
      if (!filterPills) return;
      const order = ["all", "rund", "lam", "kip", "charcuterie", "diepvries", "kruiden", "sauzen", "grootverbruik"];
      filterPills.innerHTML = order.map((key) => {
        const category = categories[key];
        const count = key === "all"
          ? products.length
          : products.filter((product) => product.category === key).length;
        return `
          <button type="button" class="filter-pill ${activeCategory === key ? "active" : ""}" data-category="${key}" aria-pressed="${activeCategory === key}">
            <i class="${category.icon}"></i>
            ${escapeHTML(getCategoryLabel(key))}
            <span class="count">${count}</span>
          </button>
        `;
      }).join("");
    };

    const renderProducts = () => {
      const grid = document.getElementById("productGrid");
      const empty = document.getElementById("noProducts");
      const meta = document.getElementById("catalogMeta");
      if (!grid || !empty || !meta) return;

      const visible = getSortedProducts().filter((product) => activeCategory === "all" || product.category === activeCategory);
      meta.innerHTML = t("catalog.meta", { visible: visible.length, total: products.length });

      if (!visible.length) {
        grid.innerHTML = "";
        empty.classList.add("show");
        return;
      }

      empty.classList.remove("show");
      grid.innerHTML = visible.map((product) => {
        const category = getCategory(product.category);
        const fallback = getFallbackImage(product);
        const description = getProductDescription(product);
        const unit = getUnitLabel(product.unit);
        const perKg = /per\s*kg/i.test(product.unit);
        return `
          <article class="product-card">
            <div class="product-media">
              <img src="${escapeHTML(resolveAsset(product.image))}" alt="${escapeHTML(getProductName(product))}" loading="lazy" data-fallback="${escapeHTML(resolveAsset(fallback))}">
              <span class="product-cat"><i class="${category.icon}"></i> ${escapeHTML(getCategoryLabel(product.category))}</span>
              ${product.promo ? `<span class="product-promo-flag">${escapeHTML(t("product.promo"))}</span>` : ""}
            </div>
            <div class="product-body">
              <div class="product-meta">
                <span class="product-weight"><i class="fa-solid fa-weight-hanging"></i> ${escapeHTML(unit)}</span>
                <span class="product-stock"><span class="status-dot"></span> ${escapeHTML(t("product.stock"))}</span>
              </div>
              <h3>${escapeHTML(getProductName(product))}</h3>
              <p class="product-desc">${escapeHTML(description)}</p>
              <div class="product-footer">
                <div class="product-price">${formatPrice(product.price)}${perKg ? ' <small>/ kg</small>' : ""}</div>
                <a href="${getWhatsAppLink(product)}" target="_blank" rel="noopener noreferrer" class="product-request">${escapeHTML(t("product.request"))} <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </article>
        `;
      }).join("");
    };

    const svgRegion = (cutId, label, shape, textX, textY, short = "") => `
      <g class="cut-region" data-cut="${cutId}" tabindex="0" role="button" aria-label="${escapeHTML(label)}">
        ${shape}
        <circle class="cut-marker" cx="${textX}" cy="${textY - 4}" r="15" />
        ${short ? `<text class="cut-region-num" x="${textX}" y="${textY + 1}">${short}</text>` : ""}
      </g>
    `;

    const CUT_MAP_IMAGES = {
      rund: "images/cuts/rund.jpg",
      lam: "images/cuts/lam.jpeg",
      kip: "images/cuts/kip.jpeg"
    };

    const cutsFigure = (animal, altKey) => `
      <figure class="cuts-map-figure">
        <img class="cuts-map-img" src="${escapeHTML(resolveAsset(CUT_MAP_IMAGES[animal]))}" alt="${escapeHTML(t(altKey))}" loading="lazy">
      </figure>
    `;

    const buildRundSvg = () => cutsFigure("rund", "cuts.panelRund");

    const buildLamSvg = () => cutsFigure("lam", "cuts.panelLam");

    const buildKipSvg = () => cutsFigure("kip", "cuts.panelKip");

    const CUT_PANELS = [
      {
        animal: "rund",
        titleKey: "cuts.panelRund",
        mapKey: "cuts.mapLabelRund",
        svg: buildRundSvg,
        groups: [
          { id: "chuck", subKey: "cuts.sub.chuck", products: ["Runderbraadstuk", "Rundergehakt"] },
          { id: "rib", subKey: "cuts.sub.rib", products: ["Entrecôte", "Ribeye"] },
          { id: "loin", subKey: "cuts.sub.loin", products: ["Kogelbiefstuk", "Ossenhaas"] },
          { id: "sirloin", subKey: "cuts.sub.sirloin", products: [] },
          { id: "round", subKey: "cuts.sub.round", products: ["Runderstoofvlees"] },
          { id: "brisket", subKey: "cuts.sub.brisket", products: [] },
          { id: "plate", subKey: "cuts.sub.plate", products: [] },
          { id: "flank", subKey: "cuts.sub.flank", products: [] }
        ]
      },
      {
        animal: "lam",
        titleKey: "cuts.panelLam",
        mapKey: "cuts.mapLabelLam",
        svg: buildLamSvg,
        groups: [
          { id: "schouder", subKey: "cuts.lam.schouder", products: ["Lamsschouder"] },
          { id: "rack", subKey: "cuts.lam.rack", products: ["Lamsrack"] },
          { id: "lende", subKey: "cuts.lam.lende", products: [] },
          { id: "bout", subKey: "cuts.lam.bout", products: ["Lamsbout"] },
          { id: "stoof", subKey: "cuts.lam.stoof", products: ["Lamsstoofvlees"] },
          { id: "extra", subKey: "cuts.lam.extra", products: ["Hele lam", "Lamsgehakt", "Lamslever"] }
        ]
      },
      {
        animal: "kip",
        titleKey: "cuts.panelKip",
        mapKey: "cuts.mapLabelKip",
        svg: buildKipSvg,
        groups: [
          { id: "borst", subKey: "cuts.kip.borst", products: ["Kipfilet", "Hele kip"] },
          { id: "vleugels", subKey: "cuts.kip.vleugels", products: ["Kippenvleugels"] },
          { id: "dij", subKey: "cuts.kip.dij", products: ["Kipdijfilet"] },
          { id: "drumsticks", subKey: "cuts.kip.drumsticks", products: ["Kippendrumsticks"] },
          { id: "spies", subKey: "cuts.kip.spies", products: ["Kipspies gemarineerd"] },
          { id: "lever", subKey: "cuts.kip.lever", products: ["Kippenlever"] }
        ]
      }
    ];

    const setActiveCut = (id) => {
      document.querySelectorAll(".cut-region").forEach((region) => {
        region.classList.toggle("active", region.dataset.cut === id);
      });
      document.querySelectorAll(".cut-card").forEach((card) => {
        card.classList.toggle("active", card.dataset.cut === id);
      });
      const card = document.querySelector(`.cut-card[data-cut="${id}"]`);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    const renderCutMaps = () => {
      const container = document.getElementById("cutMapsPanels");
      if (!container) return;

      container.innerHTML = CUT_PANELS.map((panel) => {
        const cards = panel.groups.map((group, index) => {
          const cutId = `${panel.animal}-${group.id}`;
          const items = group.products
            .map((name) => products.find((product) => product.name === name))
            .filter(Boolean);
          const rows = items.length
            ? items.map((product) => `
                <li>
                  <img class="cut-thumb" src="${escapeHTML(resolveAsset(product.image))}" alt="${escapeHTML(getProductName(product))}" loading="lazy" data-fallback="${escapeHTML(resolveAsset(product.image))}">
                  <span>${escapeHTML(getProductName(product))}</span>
                  <strong>${formatPrice(product.price)}</strong>
                </li>
              `).join("")
            : `
                <li class="cut-empty">
                  <span>${escapeHTML(t(group.subKey))}</span>
                  <strong>${escapeHTML(t("cuts.ask"))}</strong>
                </li>
              `;

          return `
            <article class="cut-card" data-cut="${cutId}">
              <div class="cut-card-head">
                <span class="cut-code">${String(index + 1).padStart(2, "0")}</span>
                <h3>${escapeHTML(t(group.subKey))}</h3>
              </div>
              <ul class="cut-list">${rows}</ul>
            </article>
          `;
        }).join("");

        return `
          <div class="cuts-panel">
            <div class="cuts-panel-head">
              <h3>${escapeHTML(t(panel.titleKey))}</h3>
              <span><i class="fa-solid fa-hand-pointer"></i> ${escapeHTML(t(panel.mapKey))}</span>
            </div>
            <div class="cuts-layout">
              <div class="cuts-map-card">
                ${panel.svg()}
                <p class="cuts-map-note">${escapeHTML(t("cuts.note"))}</p>
              </div>
              <div class="cuts-grid">${cards}</div>
            </div>
          </div>
        `;
      }).join("");

      if (!container.dataset.bound) {
        container.dataset.bound = "true";
        const activateFromEvent = (event) => {
          const region = event.target.closest("[data-cut]");
          if (!region) return;
          setActiveCut(region.dataset.cut);
        };
        container.addEventListener("click", activateFromEvent);
        container.addEventListener("keydown", (event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          const region = event.target.closest("[data-cut]");
          if (!region) return;
          event.preventDefault();
          setActiveCut(region.dataset.cut);
        });
      }
    };

    const renderAdmin = () => {
      const list = document.getElementById("adminList");
      const empty = document.getElementById("adminEmpty");
      if (!list || !empty) return;

      const total = document.getElementById("adminTotal");
      const promoCount = document.getElementById("adminPromoCount");
      if (total) total.textContent = products.length;
      if (promoCount) promoCount.textContent = products.filter((product) => product.promo).length;

      if (!products.length) {
        list.innerHTML = "";
        empty.classList.add("show");
        return;
      }

      empty.classList.remove("show");
      list.innerHTML = getSortedProducts().map((product) => {
        const category = getCategory(product.category);
        const fallback = getFallbackImage(product);
        return `
          <div class="admin-row" data-id="${escapeHTML(product.id)}">
            <div class="admin-row-thumb">
              <img src="${escapeHTML(resolveAsset(product.image))}" alt="${escapeHTML(getProductName(product))}" loading="lazy" data-fallback="${escapeHTML(resolveAsset(fallback))}">
            </div>
            <div class="admin-row-copy">
              <strong>${escapeHTML(getProductName(product))}</strong>
              <span>${escapeHTML(category.short)} &bull; <b>${formatPrice(product.price)}</b> &bull; ${escapeHTML(product.unit)}</span>
            </div>
            <button type="button" class="promo-toggle ${product.promo ? "is-on" : ""}" data-action="toggle" data-id="${escapeHTML(product.id)}" aria-pressed="${product.promo}" title="Promo aan of uit zetten">
              <span class="toggle-track"><span class="toggle-knob"></span></span>
              <span>${product.promo ? "Promo live" : "Promo uit"}</span>
            </button>
            <button type="button" class="delete-btn" data-action="delete" data-id="${escapeHTML(product.id)}" title="Product verwijderen" aria-label="${escapeHTML(getProductName(product))} verwijderen">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        `;
      }).join("");
    };

    const getStoredLeads = () => {
      try {
        const stored = window.localStorage.getItem(LEADS_KEY);
        const parsed = stored ? JSON.parse(stored) : [];
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        return [];
      }
    };

    const formatLeadDate = (value) => {
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return "-";
      return date.toLocaleString("nl-BE", { dateStyle: "short", timeStyle: "short" });
    };

    const renderAdminLeads = () => {
      const list = document.getElementById("adminLeadsList");
      const empty = document.getElementById("adminLeadsEmpty");
      const count = document.getElementById("adminLeadCount");
      if (!list || !empty) return;

      const leads = getStoredLeads();
      if (count) count.textContent = leads.length;

      if (!leads.length) {
        list.innerHTML = "";
        empty.classList.add("show");
        return;
      }

      empty.classList.remove("show");
      list.innerHTML = leads.map((lead) => {
        const isWholesale = lead.type === "groothandel";
        const business = escapeHTML(lead.business || "Geen bedrijfsnaam");
        const email = String(lead.email || "");
        const phone = String(lead.phone || "");
        const details = [business];
        if (lead.vat) details.push(`BTW ${escapeHTML(lead.vat)}`);

        return `
          <article class="admin-lead">
            <div class="admin-lead-top">
              <div class="admin-lead-title">
                <span class="admin-lead-type ${isWholesale ? "is-wholesale" : ""}">${isWholesale ? "Groothandel / horeca" : "Particulier"}</span>
                <h4>${escapeHTML(lead.name || "Onbekend")}</h4>
                <p>${details.join(" &bull; ")}</p>
              </div>
              <div class="admin-lead-meta">
                <strong>${escapeHTML(lead.code || WELCOME_CODE)}</strong>
                <span>${escapeHTML(formatLeadDate(lead.createdAt))}</span>
              </div>
            </div>
            <div class="admin-lead-contact">
              <a href="mailto:${escapeHTML(email)}"><i class="fa-solid fa-envelope"></i> ${escapeHTML(email || "-")}</a>
              <a href="tel:${escapeHTML(phone)}"><i class="fa-solid fa-phone"></i> ${escapeHTML(phone || "-")}</a>
              <span><i class="fa-solid fa-location-dot"></i> ${escapeHTML(lead.city || "-")}</span>
            </div>
            <p class="admin-lead-message">${escapeHTML(lead.message || "Geen bericht")}</p>
          </article>
        `;
      }).join("");
    };

    const csvCell = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;

    const exportAdminLeads = () => {
      const leads = getStoredLeads();
      if (!leads.length) {
        showToast("Geen leads", "Er zijn nog geen klantaanvragen om te exporteren.", "error");
        return;
      }

      const headers = ["Datum", "Type", "Bedrijf", "Naam", "E-mail", "Telefoon", "Stad", "BTW", "Bericht", "Code", "Taal"];
      const rows = leads.map((lead) => [
        lead.createdAt ? formatLeadDate(lead.createdAt) : "-",
        lead.type === "groothandel" ? "Groothandel / horeca" : "Particulier",
        lead.business || "",
        lead.name || "",
        lead.email || "",
        lead.phone || "",
        lead.city || "",
        lead.vat || "",
        lead.message || "",
        lead.code || WELCOME_CODE,
        lead.language || "nl"
      ]);
      const csv = "\ufeff" + [headers, ...rows].map((row) => row.map(csvCell).join(";")).join("\r\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `ali-vleeswaren-leads-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      showToast("Leads geëxporteerd", "Het CSV-bestand is gedownload.");
    };

    const renderAnimals = () => {
      document.querySelectorAll("[data-animal-category]").forEach((button) => {
        const isActive = button.dataset.animalCategory === activeCategory;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    };

    const renderAll = (flashPromoId = null) => {
      renderFilters();
      renderPromos(flashPromoId);
      renderProducts();
      renderAnimals();
      renderCutMaps();
      renderAdmin();
      renderAdminLeads();
    };

    const togglePromo = (id) => {
      const product = products.find((item) => item.id === id);
      if (!product) return;

      product.promo = !product.promo;
      product.promotedAt = product.promo ? Date.now() : 0;
      saveProducts();
      renderAll(product.promo ? product.id : null);

      if (product.promo) {
        showToast("Promo live gezet", `${getProductName(product)} staat nu bovenaan in de Promo Spotlight.`);
      } else {
        showToast("Promo uitgeschakeld", `${getProductName(product)} is verwijderd uit de Promo Spotlight.`);
      }
    };

    const deleteProduct = (id) => {
      const product = products.find((item) => item.id === id);
      if (!product) return;
      products = products.filter((item) => item.id !== id);
      saveProducts();
      renderAll();
      showToast("Product verwijderd", `${getProductName(product)} is definitief uit de demo verwijderd.`);
    };

    const resetDemo = () => {
      if (!window.confirm("Weet u zeker dat u de demo wilt resetten? Alle toegevoegde producten en promowijzigingen worden ongedaan gemaakt.")) return;
      products = cloneInitialProducts();
      activeCategory = "all";
      saveProducts();
      renderAll();
      const form = document.getElementById("productForm");
      if (form) {
        form.reset();
        document.getElementById("pUnit").value = "per kg";
      }
      showToast("Demo gereset", "De originele producten en promo's zijn hersteld.");
    };

    const hashAdminPassword = async (value) => {
      if (!window.crypto?.subtle) return null;
      const data = new TextEncoder().encode(value);
      const digest = await window.crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
    };

    const isAdminAuthenticated = () => {
      try {
        return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
      } catch (error) {
        return false;
      }
    };

    const showAdminLogin = () => {
      const login = document.getElementById("adminLogin");
      const content = document.getElementById("adminContent");
      const error = document.getElementById("adminLoginError");
      if (login) login.hidden = false;
      if (content) content.hidden = true;
      if (error) {
        error.hidden = true;
        error.textContent = "";
      }
      window.setTimeout(() => document.getElementById("adminUser")?.focus(), 60);
    };

    const setAdminTab = (tab) => {
      document.querySelectorAll("[data-admin-tab]").forEach((button) => {
        const isActive = button.dataset.adminTab === tab;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
      });
      const productsPane = document.getElementById("adminProductsPane");
      const leadsPane = document.getElementById("adminLeadsPane");
      if (productsPane) productsPane.hidden = tab !== "products";
      if (leadsPane) leadsPane.hidden = tab !== "leads";
      if (tab === "leads") renderAdminLeads();
    };

    const showAdminContent = () => {
      const login = document.getElementById("adminLogin");
      const content = document.getElementById("adminContent");
      if (login) login.hidden = true;
      if (content) content.hidden = false;
      renderAdmin();
      renderAdminLeads();
      setAdminTab("products");
    };

    const openAdmin = () => {
      const panel = document.getElementById("adminPanel");
      if (!panel) return;
      panel.hidden = false;
      panel.setAttribute("aria-hidden", "false");
      if (!IS_ADMIN_PAGE) document.body.classList.add("admin-open");
      if (isAdminAuthenticated()) showAdminContent();
      else showAdminLogin();
    };

    const closeAdmin = (clearHash = true) => {
      if (IS_ADMIN_PAGE) {
        window.location.href = document.body.dataset.home || "../nl/";
        return;
      }
      const panel = document.getElementById("adminPanel");
      if (!panel || panel.hidden) return;
      panel.hidden = true;
      panel.setAttribute("aria-hidden", "true");
      document.body.classList.remove("admin-open");
      if (clearHash && ADMIN_HASHES.includes(window.location.hash)) {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      }
    };

    const lockAdmin = () => {
      try {
        window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
      } catch (error) {}
      showAdminLogin();
    };

    const handleAdminLogin = async (event) => {
      event.preventDefault();
      const user = document.getElementById("adminUser")?.value.trim() || "";
      const passwordInput = document.getElementById("adminPassword");
      const password = passwordInput?.value || "";
      const error = document.getElementById("adminLoginError");
      const passwordHash = await hashAdminPassword(password);

      if (!passwordHash) {
        if (error) {
          error.textContent = "Beheer werkt alleen via een beveiligde HTTPS-verbinding.";
          error.hidden = false;
        }
        return;
      }

      if (user.toLowerCase() !== ADMIN_USER.toLowerCase() || passwordHash !== ADMIN_PASSWORD_HASH) {
        if (error) {
          error.textContent = "Gebruikersnaam of wachtwoord is onjuist.";
          error.hidden = false;
        }
        if (passwordInput) {
          passwordInput.value = "";
          passwordInput.focus();
        }
        return;
      }

      try {
        window.sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
      } catch (error) {}
      showAdminContent();
    };

    const maybeOpenAdmin = () => {
      if (!IS_ADMIN_PAGE && ADMIN_HASHES.includes(window.location.hash)) openAdmin();
    };

    const setMenuOpen = (open) => {
      const menu = document.getElementById("navMenu");
      const backdrop = document.getElementById("navBackdrop");
      const toggle = document.getElementById("menuToggle");
      if (!menu || !backdrop || !toggle) return;
      menu.classList.toggle("open", open);
      backdrop.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", t(open ? "menu.close" : "menu.open"));
      toggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    };

    const applyStaticTranslations = () => {
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = t(element.dataset.i18n);
      });
      document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        element.innerHTML = t(element.dataset.i18nHtml);
      });
      document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
      });
      document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
      });
    };

    const applyLanguage = (language) => {
      if (!SUPPORTED_LANGUAGES.includes(language)) language = "nl";
      activeLanguage = language;

      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      if (document.documentElement.dataset.keepTitle !== "true") {
        document.title = t("meta.title");
      }

      const description = document.querySelector('meta[name="description"]');
      if (description) description.setAttribute("content", t("meta.description"));

      document.querySelector(".lang-switch")?.setAttribute("aria-label", t("lang.label"));
      document.querySelectorAll(".lang-btn").forEach((link) => {
        const isActive = link.dataset.lang === language;
        link.classList.toggle("active", isActive);
        if (isActive) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });

      applyStaticTranslations();

      document.querySelectorAll("[data-wa-key]").forEach((link) => {
        const message = t(link.dataset.waKey);
        link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      });

      const discountPercent = document.getElementById("discountPercent");
      if (discountPercent) discountPercent.textContent = `${WELCOME_DISCOUNT}%`;
      const discountCode = document.getElementById("discountCode");
      if (discountCode) discountCode.textContent = WELCOME_CODE;

      const menuOpen = document.getElementById("navMenu")?.classList.contains("open");
      document.getElementById("menuToggle")?.setAttribute("aria-label", t(menuOpen ? "menu.close" : "menu.open"));

      renderAll();
    };

    const getCustomerLead = (form) => {
      const data = new FormData(form);
      return {
        id: `lead-${Date.now()}-${Math.floor(Math.random() * 999)}`,
        type: String(data.get("type") || "particulier"),
        business: String(data.get("business") || "").trim(),
        name: String(data.get("name") || "").trim(),
        email: String(data.get("email") || "").trim(),
        phone: String(data.get("phone") || "").trim(),
        city: String(data.get("city") || "").trim(),
        vat: String(data.get("vat") || "").trim(),
        message: String(data.get("message") || "").trim(),
        code: WELCOME_CODE,
        language: activeLanguage,
        createdAt: new Date().toISOString()
      };
    };

    const saveLead = (lead) => {
      try {
        const stored = window.localStorage.getItem(LEADS_KEY);
        const parsed = stored ? JSON.parse(stored) : [];
        const leads = Array.isArray(parsed) ? parsed : [];
        leads.unshift(lead);
        window.localStorage.setItem(LEADS_KEY, JSON.stringify(leads.slice(0, 200)));
      } catch (error) {
        return false;
      }
      return true;
    };

    const getCustomerTypeLabel = (type) => t(type === "groothandel" ? "customer.typeWholesale" : "customer.typePrivate");

    const syncCustomerType = () => {
      const type = document.getElementById("cType")?.value || "particulier";
      const business = document.getElementById("cBusiness");
      if (!business) return;
      const required = type === "groothandel";
      business.required = required;
      business.setAttribute("aria-required", String(required));
    };

    const getCustomerLinks = (lead) => {
      const message = t("customer.waMessage", {
        type: getCustomerTypeLabel(lead.type),
        business: lead.business || "-",
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        city: lead.city || "-",
        vat: lead.vat || "-",
        message: lead.message || "-",
        code: lead.code
      });
      const subject = t("customer.mailSubject", { business: lead.business || lead.name });
      return {
        whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        mail: `mailto:${CUSTOMER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
      };
    };

    const resetCustomerForm = (focus = true) => {
      const form = document.getElementById("customerForm");
      const success = document.getElementById("customerSuccess");
      if (!form || !success) return;
      form.reset();
      syncCustomerType();
      form.hidden = false;
      success.hidden = true;
      if (focus) document.getElementById("cType")?.focus();
    };

    document.getElementById("cType")?.addEventListener("change", syncCustomerType);
    syncCustomerType();

    document.getElementById("customerForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const lead = getCustomerLead(form);
      const success = document.getElementById("customerSuccess");
      const businessMissing = lead.type === "groothandel" && !lead.business;
      if (!lead.name || !lead.email || !lead.phone || businessMissing || !success) {
        showToast(t("customer.formTitle"), t("customer.formNote"), "error");
        return;
      }

      const links = getCustomerLinks(lead);
      const whatsappLink = document.getElementById("customerWhatsApp");
      const mailLink = document.getElementById("customerMail");
      if (whatsappLink) whatsappLink.href = links.whatsapp;
      if (mailLink) mailLink.href = links.mail;

      saveLead(lead);
      renderAdminLeads();
      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "center" });
      trackEvent("generate_lead", {
        form: "word_klant",
        customer_type: lead.type,
        language: activeLanguage,
        discount_code: WELCOME_CODE
      });
      showToast(t("customer.successTitle"), `${t("customer.codeLabel")}: ${WELCOME_CODE}`);
    });

    document.getElementById("customerAgain")?.addEventListener("click", () => {
      resetCustomerForm(true);
    });

    document.getElementById("productForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("pName").value.trim();
      const category = document.getElementById("pCategory").value;
      const price = Number(document.getElementById("pPrice").value);
      const unit = document.getElementById("pUnit").value.trim() || "per kg";
      const description = document.getElementById("pDescription").value.trim();
      const image = document.getElementById("pImage").value.trim();
      const promo = document.getElementById("pPromo").checked;

      if (!name || !categories[category] || !Number.isFinite(price) || price <= 0) {
        showToast("Product niet toegevoegd", "Vul een geldige naam, categorie en prijs in.", "error");
        return;
      }

      const now = Date.now();
      const product = normalizeProduct({
        id: `p-${now}-${Math.floor(Math.random() * 999)}`,
        name,
        category,
        price,
        unit,
        description: description || "Halal groothandelsproduct, verkrijgbaar per kg of per doos.",
        image: image || getCategory(category).image,
        promo,
        promotedAt: promo ? now : 0,
        createdAt: now
      });

      products.unshift(product);
      saveProducts();
      renderAll(promo ? product.id : null);
      event.currentTarget.reset();
      document.getElementById("pUnit").value = "per kg";

      if (promo) {
        showToast("Promo direct live", `${getProductName(product)} staat nu bovenaan de Promo Spotlight en het assortiment.`);
      } else {
        showToast("Product toegevoegd", `${getProductName(product)} is toegevoegd aan het assortiment.`);
      }
    });

    document.getElementById("adminList")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-action]");
      if (!button) return;
      const id = button.dataset.id;
      if (button.dataset.action === "delete") deleteProduct(id);
      if (button.dataset.action === "toggle") togglePromo(id);
    });

    const selectAnimalCategory = (category) => {
      if (category !== "all" && !categories[category]) return;
      activeCategory = category;
      renderFilters();
      renderProducts();
      renderAnimals();
      trackEvent("select_animal", { category });
      document.getElementById("assortiment")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.getElementById("animalGrid")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-animal-category]");
      if (!button) return;
      selectAnimalCategory(button.dataset.animalCategory);
    });

    document.querySelector(".animal-all")?.addEventListener("click", () => {
      selectAnimalCategory("all");
    });

    document.getElementById("filterPills")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      activeCategory = button.dataset.category;
      renderFilters();
      renderProducts();
      renderAnimals();
      trackEvent("filter_category", { category: activeCategory });
    });

    document.getElementById("resetDemo")?.addEventListener("click", resetDemo);
    document.getElementById("resetDemoTop")?.addEventListener("click", resetDemo);

    document.getElementById("adminLoginForm")?.addEventListener("submit", handleAdminLogin);
    document.getElementById("adminClose")?.addEventListener("click", () => closeAdmin());
    document.querySelectorAll("[data-admin-close]").forEach((element) => {
      element.addEventListener("click", () => closeAdmin());
    });
    document.getElementById("adminLock")?.addEventListener("click", lockAdmin);
    document.getElementById("adminExportLeads")?.addEventListener("click", exportAdminLeads);
    document.querySelectorAll("[data-admin-tab]").forEach((button) => {
      button.addEventListener("click", () => setAdminTab(button.dataset.adminTab));
    });
    window.addEventListener("hashchange", maybeOpenAdmin);

    document.addEventListener("click", (event) => {
      const link = event.target.closest('a[href*="wa.me"]');
      if (!link) return;
      trackEvent("whatsapp_click", {
        link_text: link.textContent.trim().slice(0, 80),
        language: activeLanguage
      });
    });

    document.getElementById("menuToggle")?.addEventListener("click", () => setMenuOpen(true));
    document.getElementById("menuClose")?.addEventListener("click", () => setMenuOpen(false));
    document.getElementById("navBackdrop")?.addEventListener("click", () => setMenuOpen(false));

    document.querySelectorAll("#navMenu a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.getElementById("toastClose")?.addEventListener("click", () => {
      document.getElementById("toast")?.classList.remove("show");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      closeAdmin();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 991) setMenuOpen(false);
    });

    document.addEventListener("error", (event) => {
      const image = event.target;
      if (image?.tagName === "IMG" && image.dataset.fallback && !image.dataset.fallbackApplied) {
        image.dataset.fallbackApplied = "true";
        image.src = image.dataset.fallback;
      }
    }, true);

    const navSections = Array.from(document.querySelectorAll("main section[id], #stats"));
    const navLinks = Array.from(document.querySelectorAll("[data-nav]"));

    const updateActiveNav = () => {
      const position = window.scrollY + 150;
      let current = "home";
      navSections.forEach((section) => {
        if (section.offsetTop <= position) current = section.id;
      });
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) current = "contact";
      navLinks.forEach((link) => link.classList.toggle("active", link.dataset.nav === current));
    };

    window.addEventListener("scroll", updateActiveNav, { passive: true });
    window.addEventListener("load", updateActiveNav);

    const revealElements = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
      revealElements.forEach((element) => revealObserver.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add("visible"));
    }

    applyLanguage(PAGE_LANGUAGE);
    if (IS_ADMIN_PAGE) openAdmin();
    else maybeOpenAdmin();
    updateActiveNav();
