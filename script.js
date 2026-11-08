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

    const getWhatsAppLink = (product) => {
      const message = t("wa.product", {
        name: product.name,
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
      const preview = promos.slice(0, 2).map((product) => `${product.name} ${formatPrice(product.price)}`).join(" • ");
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
              <img src="${escapeHTML(resolveAsset(product.image))}" alt="${escapeHTML(product.name)}" loading="lazy" data-fallback="${escapeHTML(resolveAsset(fallback))}">
              <span class="promo-flag"><i class="fa-solid fa-bolt"></i> ${escapeHTML(t("promo.flag"))}</span>
              <div class="promo-price">
                <small>${escapeHTML(t("promo.actionPrice"))}</small>
                <strong>${formatPrice(product.price)}</strong>
                <span>${escapeHTML(unit)}</span>
              </div>
            </div>
            <div class="promo-body">
              <span class="promo-category"><i class="${category.icon}"></i> ${escapeHTML(getCategoryLabel(product.category))}</span>
              <h3>${escapeHTML(product.name)}</h3>
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
              <img src="${escapeHTML(resolveAsset(product.image))}" alt="${escapeHTML(product.name)}" loading="lazy" data-fallback="${escapeHTML(resolveAsset(fallback))}">
              <span class="product-cat"><i class="${category.icon}"></i> ${escapeHTML(getCategoryLabel(product.category))}</span>
              ${product.promo ? `<span class="product-promo-flag">${escapeHTML(t("product.promo"))}</span>` : ""}
            </div>
            <div class="product-body">
              <div class="product-meta">
                <span class="product-weight"><i class="fa-solid fa-weight-hanging"></i> ${escapeHTML(unit)}</span>
                <span class="product-stock"><span class="status-dot"></span> ${escapeHTML(t("product.stock"))}</span>
              </div>
              <h3>${escapeHTML(product.name)}</h3>
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

    const buildRundSvg = () => `
      <svg class="cuts-map-svg cuts-svg-rund" viewBox="0 0 900 440" role="img" aria-label="${escapeHTML(t("cuts.panelRund"))}">
        <defs>
          <linearGradient id="rundHide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#b0764b"/>
            <stop offset="0.55" stop-color="#95603c"/>
            <stop offset="1" stop-color="#754426"/>
          </linearGradient>
          <linearGradient id="rundFace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#a76c44"/>
            <stop offset="1" stop-color="#7e4a2a"/>
          </linearGradient>
          <clipPath id="rundClip"><path d="M208 200 C228 178 258 166 300 160 C320 150 360 146 410 148 C500 152 610 152 690 170 C742 182 776 210 786 246 C795 280 782 310 758 327 C726 348 660 354 584 352 C506 350 404 354 324 348 C280 345 244 332 226 308 C212 290 205 254 205 230 C205 216 206 206 208 200 Z"/></clipPath>
        </defs>
        <ellipse class="cuts-shadow" cx="470" cy="416" rx="300" ry="14" />
        <g class="cuts-animal">
          <path class="cuts-tail" d="M786 212 C814 224 824 254 814 286" />
          <ellipse class="cuts-tail-tuft" cx="812" cy="298" rx="9" ry="13" />
          <path class="cuts-leg" d="M322 300 C318 330 318 362 322 396 L360 396 C364 362 364 330 360 300 Z" />
          <path class="cuts-leg" d="M690 300 C684 332 684 364 690 398 L730 398 C736 364 736 332 730 300 Z" />
          <rect class="cuts-hoof" x="320" y="394" width="42" height="14" rx="5" />
          <rect class="cuts-hoof" x="688" y="396" width="44" height="14" rx="5" />
          <path class="cuts-leg" d="M244 300 C240 330 240 362 244 396 L284 396 C288 362 288 330 284 300 Z" />
          <path class="cuts-leg" d="M636 300 C630 334 630 366 636 400 L680 400 C686 366 686 334 680 300 Z" />
          <rect class="cuts-hoof" x="242" y="394" width="44" height="14" rx="5" />
          <rect class="cuts-hoof" x="634" y="398" width="50" height="15" rx="5" />
          <path class="cuts-body" d="M208 200 C228 178 258 166 300 160 C320 150 360 146 410 148 C500 152 610 152 690 170 C742 182 776 210 786 246 C795 280 782 310 758 327 C726 348 660 354 584 352 C506 350 404 354 324 348 C280 345 244 332 226 308 C212 290 205 254 205 230 C205 216 206 206 208 200 Z" />
          <path class="cuts-dewlap" d="M208 240 C226 258 232 284 224 308 C214 298 206 280 204 260 Z" />
          <ellipse class="cuts-cheek" cx="152" cy="238" rx="24" ry="15" />
          <path class="cuts-ear" d="M158 162 C172 142 196 134 210 142 C202 160 184 172 166 175 Z" />
          <path class="cuts-head" d="M206 194 C198 174 180 162 158 164 C136 166 118 182 113 202 L103 232 C99 250 107 267 125 272 C141 277 154 270 161 257 C169 267 185 272 197 265 C211 255 215 230 212 210 Z" />
          <ellipse class="cuts-muzzle" cx="110" cy="252" rx="27" ry="18" />
          <ellipse class="cuts-nostril" cx="98" cy="250" rx="4" ry="3" />
          <path class="cuts-mouth" d="M86 264 Q110 270 134 262" />
          <path class="cuts-horn" d="M160 156 C150 132 168 118 188 124 C180 138 174 150 170 158 Z" />
          <circle class="cuts-eye" cx="147" cy="199" r="5" />
          <circle class="cuts-eye-glint" cx="149" cy="197" r="1.6" />
        </g>
        <g class="cuts-regions">
          ${svgRegion("rund-chuck", t("cuts.sub.chuck"), '<path clip-path="url(#rundClip)" d="M208 198 C226 164 270 150 332 150 L332 266 C286 270 240 250 220 226 C212 216 208 206 208 198 Z"/>', 270, 214, "1")}
          ${svgRegion("rund-rib", t("cuts.sub.rib"), '<path clip-path="url(#rundClip)" d="M332 150 L458 148 L458 266 L332 266 Z"/>', 394, 212, "2")}
          ${svgRegion("rund-loin", t("cuts.sub.loin"), '<path clip-path="url(#rundClip)" d="M458 148 L566 146 L566 252 L458 266 Z"/>', 512, 206, "3")}
          ${svgRegion("rund-sirloin", t("cuts.sub.sirloin"), '<path clip-path="url(#rundClip)" d="M566 146 L648 152 L648 268 L566 252 Z"/>', 606, 214, "4")}
          ${svgRegion("rund-round", t("cuts.sub.round"), '<path clip-path="url(#rundClip)" d="M648 152 C700 162 736 186 752 216 C770 250 768 288 750 312 C730 338 694 352 650 352 L648 268 Z"/>', 700, 254, "5")}
          ${svgRegion("rund-brisket", t("cuts.sub.brisket"), '<path clip-path="url(#rundClip)" d="M208 258 C248 264 294 266 332 266 L332 338 C302 342 266 338 238 322 C220 310 210 286 208 258 Z"/>', 270, 306, "6")}
          ${svgRegion("rund-plate", t("cuts.sub.plate"), '<path clip-path="url(#rundClip)" d="M332 266 L520 264 L520 342 L332 342 Z"/>', 426, 306, "7")}
          ${svgRegion("rund-flank", t("cuts.sub.flank"), '<path clip-path="url(#rundClip)" d="M520 264 L648 264 L648 334 L520 342 Z"/>', 584, 304, "8")}
        </g>
      </svg>
    `;

    const buildLamSvg = () => `
      <svg class="cuts-map-svg cuts-svg-lam" viewBox="0 0 900 440" role="img" aria-label="${escapeHTML(t("cuts.panelLam"))}">
        <defs>
          <linearGradient id="lamWool" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#fdf9ef"/>
            <stop offset="0.6" stop-color="#f1e7d2"/>
            <stop offset="1" stop-color="#e0d2b6"/>
          </linearGradient>
          <linearGradient id="lamFace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#c3ae8c"/>
            <stop offset="1" stop-color="#957f5c"/>
          </linearGradient>
          <clipPath id="lamClip"><path d="M232 250 C224 214 240 190 268 186 C280 164 308 158 324 172 C338 150 370 148 384 166 C400 148 432 150 444 170 C462 152 494 158 502 178 C522 162 552 168 558 188 C580 176 608 186 612 206 C636 200 658 214 656 234 C682 238 698 260 688 282 C702 302 692 324 668 332 C640 344 580 348 520 346 C452 344 386 348 330 344 C290 341 254 328 240 306 C228 290 228 268 232 250 Z"/></clipPath>
        </defs>
        <ellipse class="cuts-shadow" cx="470" cy="418" rx="290" ry="13" />
        <g class="cuts-animal">
          <path class="cuts-tail" d="M690 240 C712 244 722 262 716 280" />
          <ellipse class="cuts-tail-tuft" cx="713" cy="286" rx="8" ry="10" />
          <path class="cuts-leg" d="M380 328 C377 352 377 382 380 408 L396 408 C399 382 399 352 396 328 Z" />
          <path class="cuts-leg" d="M690 326 C687 350 687 380 690 406 L706 406 C709 380 709 350 706 326 Z" />
          <rect class="cuts-hoof" x="378" y="406" width="20" height="11" rx="4" />
          <rect class="cuts-hoof" x="688" y="404" width="20" height="11" rx="4" />
          <path class="cuts-leg" d="M312 328 C309 352 309 382 312 408 L328 408 C331 382 331 352 328 328 Z" />
          <path class="cuts-leg" d="M630 328 C627 352 627 382 630 408 L648 408 C651 382 651 352 648 328 Z" />
          <rect class="cuts-hoof" x="310" y="406" width="20" height="11" rx="4" />
          <rect class="cuts-hoof" x="628" y="406" width="22" height="11" rx="4" />
          <path class="cuts-body" d="M232 250 C224 214 240 190 268 186 C280 164 308 158 324 172 C338 150 370 148 384 166 C400 148 432 150 444 170 C462 152 494 158 502 178 C522 162 552 168 558 188 C580 176 608 186 612 206 C636 200 658 214 656 234 C682 238 698 260 688 282 C702 302 692 324 668 332 C640 344 580 348 520 346 C452 344 386 348 330 344 C290 341 254 328 240 306 C228 290 228 268 232 250 Z" />
          <path class="cuts-head" d="M236 232 C228 212 210 202 192 206 C176 210 166 224 167 240 L163 264 C161 282 170 296 186 299 C200 302 212 293 214 281 C221 289 233 292 242 285 C251 276 251 256 247 240 Z" />
          <ellipse class="cuts-muzzle" cx="182" cy="276" rx="18" ry="13" />
          <ellipse class="cuts-nostril" cx="172" cy="274" rx="3" ry="2.5" />
          <ellipse class="cuts-wool-cap" cx="208" cy="210" rx="26" ry="15" />
          <path class="cuts-ear" d="M204 218 C191 226 188 248 200 262 C214 253 217 232 211 218 Z" />
          <circle class="cuts-eye" cx="208" cy="236" r="4.5" />
          <circle class="cuts-eye-glint" cx="210" cy="234" r="1.4" />
        </g>
        <g class="cuts-regions">
          ${svgRegion("lam-schouder", t("cuts.lam.schouder"), '<path clip-path="url(#lamClip)" d="M232 240 C246 200 284 182 350 182 L350 296 C308 300 266 284 248 262 C238 252 234 246 232 240 Z"/>', 292, 244, "1")}
          ${svgRegion("lam-rack", t("cuts.lam.rack"), '<path clip-path="url(#lamClip)" d="M350 178 L478 174 L478 284 L350 296 Z"/>', 414, 232, "2")}
          ${svgRegion("lam-lende", t("cuts.lam.lende"), '<path clip-path="url(#lamClip)" d="M478 174 L600 180 L600 280 L478 284 Z"/>', 538, 230, "3")}
          ${svgRegion("lam-bout", t("cuts.lam.bout"), '<path clip-path="url(#lamClip)" d="M600 180 C640 188 664 210 674 238 C684 268 678 302 658 320 C640 336 612 342 592 340 L600 280 Z"/>', 634, 264, "4")}
          ${svgRegion("lam-stoof", t("cuts.lam.stoof"), '<path clip-path="url(#lamClip)" d="M350 296 L578 286 L578 342 L350 342 Z"/>', 462, 320, "5")}
          ${svgRegion("lam-extra", t("cuts.lam.extra"), '<path clip-path="url(#lamClip)" d="M248 262 L350 296 L350 342 L288 340 C266 334 252 318 246 298 Z"/>', 298, 318, "6")}
        </g>
      </svg>
    `;

    const buildKipSvg = () => `
      <svg class="cuts-map-svg cuts-svg-kip" viewBox="0 0 900 440" role="img" aria-label="${escapeHTML(t("cuts.panelKip"))}">
        <defs>
          <linearGradient id="kipBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#f7eccd"/>
            <stop offset="0.6" stop-color="#ecd9ad"/>
            <stop offset="1" stop-color="#d8be8d"/>
          </linearGradient>
          <linearGradient id="kipWing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#e8d5a8"/>
            <stop offset="1" stop-color="#c9ab77"/>
          </linearGradient>
          <clipPath id="kipClip">
            <path d="M340 238 C350 204 392 190 442 192 C486 194 534 200 574 214 C612 226 640 248 648 272 C658 296 646 320 618 332 C586 344 524 346 474 340 C424 334 374 326 348 308 C334 298 330 270 340 238 Z"/>
            <path d="M545 322 C543 346 541 374 543 398 L561 398 C563 374 565 346 563 322 Z"/>
            <path d="M600 320 C598 344 596 370 598 394 L616 394 C618 370 620 344 618 320 Z"/>
          </clipPath>
        </defs>
        <ellipse class="cuts-shadow" cx="500" cy="414" rx="230" ry="12" />
        <g class="cuts-animal">
          <path class="cuts-feather" d="M644 252 C686 216 738 206 774 222 C748 234 716 248 668 270 Z" />
          <path class="cuts-feather" d="M648 270 C696 244 746 242 776 260 C750 268 720 278 672 292 Z" />
          <path class="cuts-feather" d="M652 288 C696 270 742 272 766 292 C742 298 714 304 676 308 Z" />
          <path class="cuts-legline" d="M545 322 L543 396" />
          <path class="cuts-legline" d="M600 320 L598 392" />
          <path class="cuts-toes" d="M543 398 L517 408 M543 398 L547 414 M543 398 L571 408" />
          <path class="cuts-toes" d="M598 394 L574 404 M598 394 L602 410 M598 394 L624 404" />
          <path class="cuts-body" d="M340 238 C350 204 392 190 442 192 C486 194 534 200 574 214 C612 226 640 248 648 272 C658 296 646 320 618 332 C586 344 524 346 474 340 C424 334 374 326 348 308 C334 298 330 270 340 238 Z" />
          <path class="cuts-neck" d="M346 240 C330 216 312 198 292 188 C274 178 258 182 256 198 C254 214 268 226 286 234 C302 242 320 254 328 270 Z" />
          <g class="cuts-head-group">
            <circle class="cuts-comb" cx="230" cy="146" r="11" />
            <circle class="cuts-comb" cx="246" cy="138" r="13" />
            <circle class="cuts-comb" cx="262" cy="146" r="10" />
            <circle class="cuts-head" cx="244" cy="176" r="28" />
            <path class="cuts-beak" d="M220 170 L188 179 L220 190 Z" />
            <ellipse class="cuts-wattle" cx="228" cy="202" rx="10" ry="13" />
            <circle class="cuts-eye" cx="236" cy="170" r="4.5" />
            <circle class="cuts-eye-glint" cx="238" cy="168" r="1.4" />
          </g>
          <path class="cuts-wing" d="M490 236 C524 218 578 224 610 246 C626 258 622 280 600 286 C570 294 530 286 504 272 C490 264 482 248 490 236 Z" />
          <path class="cuts-wing-line" d="M510 244 C534 236 566 238 588 250 M504 260 C528 252 562 254 586 266" />
        </g>
        <g class="cuts-regions">
          ${svgRegion("kip-borst", t("cuts.kip.borst"), '<path clip-path="url(#kipClip)" d="M340 242 C362 214 400 202 442 202 L466 202 L466 306 C430 314 392 316 366 304 C346 296 336 270 340 242 Z"/>', 398, 266, "1")}
          ${svgRegion("kip-vleugels", t("cuts.kip.vleugels"), '<path clip-path="url(#kipClip)" d="M490 236 C524 218 578 224 610 246 C626 258 622 280 600 286 C570 294 530 286 504 272 C490 264 482 248 490 236 Z"/>', 552, 262, "2")}
          ${svgRegion("kip-dij", t("cuts.kip.dij"), '<path clip-path="url(#kipClip)" d="M606 248 C640 254 660 276 662 302 C664 326 646 342 620 344 L594 344 L594 264 Z"/>', 636, 310, "3")}
          ${svgRegion("kip-drumsticks", t("cuts.kip.drumsticks"), '<path clip-path="url(#kipClip)" d="M532 316 L576 316 L576 404 L532 404 Z"/><path clip-path="url(#kipClip)" d="M588 316 L630 316 L630 400 L588 400 Z"/>', 553, 382, "4")}
          ${svgRegion("kip-spies", t("cuts.kip.spies"), '<path clip-path="url(#kipClip)" d="M470 204 C520 204 570 212 602 226 L602 250 C566 236 520 230 470 230 Z"/>', 502, 218, "5")}
          ${svgRegion("kip-lever", t("cuts.kip.lever"), '<path clip-path="url(#kipClip)" d="M468 306 C500 312 534 312 566 306 L578 334 C548 342 508 342 476 336 Z"/>', 524, 322, "6")}
        </g>
      </svg>
    `;

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
                  <img class="cut-thumb" src="${escapeHTML(resolveAsset(product.image))}" alt="${escapeHTML(product.name)}" loading="lazy" data-fallback="${escapeHTML(resolveAsset(product.image))}">
                  <span>${escapeHTML(product.name)}</span>
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
              <img src="${escapeHTML(resolveAsset(product.image))}" alt="${escapeHTML(product.name)}" loading="lazy" data-fallback="${escapeHTML(resolveAsset(fallback))}">
            </div>
            <div class="admin-row-copy">
              <strong>${escapeHTML(product.name)}</strong>
              <span>${escapeHTML(category.short)} &bull; <b>${formatPrice(product.price)}</b> &bull; ${escapeHTML(product.unit)}</span>
            </div>
            <button type="button" class="promo-toggle ${product.promo ? "is-on" : ""}" data-action="toggle" data-id="${escapeHTML(product.id)}" aria-pressed="${product.promo}" title="Promo aan of uit zetten">
              <span class="toggle-track"><span class="toggle-knob"></span></span>
              <span>${product.promo ? "Promo live" : "Promo uit"}</span>
            </button>
            <button type="button" class="delete-btn" data-action="delete" data-id="${escapeHTML(product.id)}" title="Product verwijderen" aria-label="${escapeHTML(product.name)} verwijderen">
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
        showToast("Promo live gezet", `${product.name} staat nu bovenaan in de Promo Spotlight.`);
      } else {
        showToast("Promo uitgeschakeld", `${product.name} is verwijderd uit de Promo Spotlight.`);
      }
    };

    const deleteProduct = (id) => {
      const product = products.find((item) => item.id === id);
      if (!product) return;
      products = products.filter((item) => item.id !== id);
      saveProducts();
      renderAll();
      showToast("Product verwijderd", `${product.name} is definitief uit de demo verwijderd.`);
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
        showToast("Promo direct live", `${product.name} staat nu bovenaan de Promo Spotlight en het assortiment.`);
      } else {
        showToast("Product toegevoegd", `${product.name} is toegevoegd aan het assortiment.`);
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
