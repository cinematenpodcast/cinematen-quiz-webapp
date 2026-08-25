/* @ds-bundle: {"format":4,"namespace":"CinematenDesignSystem_d9e7a8","components":[{"name":"ArticleCard","sourcePath":"components/cards/ArticleCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"HeroCarousel","sourcePath":"components/media/HeroCarousel.jsx"},{"name":"PodcastCallout","sourcePath":"components/media/PodcastCallout.jsx"},{"name":"PodcastPlayer","sourcePath":"components/media/PodcastPlayer.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"}],"sourceHashes":{"components/cards/ArticleCard.jsx":"7c48670d7306","components/core/Badge.jsx":"2fd4080b2bbb","components/core/Button.jsx":"40e59df1cb2f","components/core/Chip.jsx":"3bc3f7b0f6a6","components/layout/Footer.jsx":"bcd6a7f4ccbf","components/media/HeroCarousel.jsx":"d1e7123e1f9e","components/media/PodcastCallout.jsx":"8213d668e74e","components/media/PodcastPlayer.jsx":"f5cf8552a0f1","components/navigation/Breadcrumb.jsx":"6802a90bba30","components/navigation/Header.jsx":"e846d52d77b6","components/navigation/Pagination.jsx":"1ec1158a7044","image-slot.js":"0394ad34f685","ui_kits/website-mobile/MobileArticleDetail.jsx":"acfa8eb27786","ui_kits/website-mobile/MobileHomepage.jsx":"80c90dcc03f0","ui_kits/website-mobile/MobileOverview.jsx":"86863063978a","ui_kits/website/ArticleDetail.jsx":"946e83ee6ad4","ui_kits/website/Homepage.jsx":"2428460700a8","ui_kits/website/Overview.jsx":"9fde3a6687aa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CinematenDesignSystem_d9e7a8 = window.CinematenDesignSystem_d9e7a8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const KIND_STYLE = {
  category: {
    background: 'rgba(13,23,48,0.8)',
    color: 'var(--primary)',
    border: '1px solid var(--primary-fixed-dim)',
    backdropFilter: 'blur(12px)'
  },
  review: {
    background: 'var(--accent-blue)',
    color: '#ffffff'
  },
  blog: {
    background: 'var(--accent-purple)',
    color: '#ffffff'
  },
  retro: {
    background: 'var(--accent-blue)',
    color: '#ffffff'
  },
  live: {
    background: 'var(--accent-yellow)',
    color: '#0a0c10'
  }
};
function Badge({
  children,
  kind = 'category',
  style
}) {
  const kindStyle = KIND_STYLE[kind] || KIND_STYLE.category;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '5px 10px',
      borderRadius: kind === 'category' ? 'var(--radius-full)' : 'var(--radius-sm)',
      display: 'inline-block',
      lineHeight: 1,
      ...kindStyle,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/ArticleCard.jsx
try { (() => {
let injected = false;
function ensureStyle() {
  if (injected) return;
  injected = true;
  const style = document.createElement('style');
  style.textContent = `
.cn-article{background:var(--surface-container-low);border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--outline-variant);display:flex;flex-direction:column;transition:border-color .2s ease,transform .2s ease;text-decoration:none;color:inherit;}
.cn-article:hover{border-color:var(--primary);transform:translateY(-2px);}
.cn-article__media{position:relative;width:100%;aspect-ratio:16/9;overflow:hidden;background:var(--surface-container-high);}
.cn-article__media img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease;}
.cn-article:hover .cn-article__media img{transform:scale(1.05);}
.cn-article__badge{position:absolute;top:12px;left:12px;}
.cn-article__body{padding:20px;display:flex;flex-direction:column;flex-grow:1;}
.cn-article__title{font-family:var(--font-sans);font-weight:600;font-size:var(--text-headline-md-size);line-height:var(--text-headline-md-line);color:var(--on-surface);margin:0 0 12px;}
.cn-article:hover .cn-article__title{color:var(--primary);}
.cn-article__excerpt{font-family:var(--font-sans);font-size:var(--text-body-md-size);color:var(--on-surface-variant);margin:0 0 16px;flex-grow:1;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
.cn-article__meta{font-family:var(--font-sans);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--on-surface-variant);display:flex;align-items:center;gap:8px;margin-top:auto;padding-top:16px;border-top:1px solid var(--outline-variant);}

.cn-article--overlay{position:relative;height:360px;justify-content:flex-end;}
.cn-article--overlay .cn-article__media{position:absolute;inset:0;height:100%;aspect-ratio:auto;}
.cn-article--overlay .cn-article__scrim{position:absolute;inset:0;background:linear-gradient(to top,var(--surface-container-low) 0%,rgba(30,32,36,0.6) 45%,rgba(30,32,36,0) 100%);}
.cn-article--overlay .cn-article__body{position:relative;z-index:1;padding:20px;background:none;border-top:none;}
.cn-article--overlay .cn-article__excerpt{-webkit-line-clamp:2;}
.cn-article--overlay .cn-article__meta{border-top:none;padding-top:0;}

.cn-article--row{flex-direction:row;background:none;border:none;border-radius:var(--radius-lg);gap:16px;padding:8px;}
.cn-article--row:hover{border-color:transparent;transform:none;background:var(--surface-container-low);}
.cn-article--row .cn-article__media{width:112px;height:84px;flex-shrink:0;border-radius:var(--radius-md);aspect-ratio:auto;}
.cn-article--row .cn-article__body{padding:4px 0;justify-content:center;}
.cn-article--row .cn-article__title{font-size:15px;line-height:1.3;margin:0 0 6px;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;}
.cn-article--row .cn-article__excerpt{display:none;}
.cn-article--row .cn-article__meta{border-top:none;padding-top:0;margin-top:0;}
`;
  document.head.appendChild(style);
}
function ArticleCard({
  image,
  badge,
  title,
  excerpt,
  meta,
  variant = 'default',
  href = '#',
  onClick
}) {
  ensureStyle();
  const overlay = variant === 'overlay';
  const row = variant === 'row';
  return /*#__PURE__*/React.createElement("a", {
    className: `cn-article${overlay ? ' cn-article--overlay' : ''}${row ? ' cn-article--row' : ''}`,
    href: href,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "cn-article__media"
  }, image, overlay && /*#__PURE__*/React.createElement("div", {
    className: "cn-article__scrim"
  }), badge && /*#__PURE__*/React.createElement("div", {
    className: "cn-article__badge"
  }, badge)), /*#__PURE__*/React.createElement("div", {
    className: "cn-article__body"
  }, row && badge, /*#__PURE__*/React.createElement("h3", {
    className: "cn-article__title"
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    className: "cn-article__excerpt"
  }, excerpt), meta && /*#__PURE__*/React.createElement("div", {
    className: "cn-article__meta"
  }, meta)));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const VARIANT_STYLE = {
  primary: {
    background: 'var(--primary)',
    color: 'var(--on-primary)',
    border: '1px solid transparent'
  },
  accent: {
    background: '#ffffff',
    color: 'var(--surface)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--on-surface)',
    border: '1px solid var(--outline)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--on-surface-variant)',
    border: '1px solid transparent'
  },
  spotify: {
    background: 'var(--brand-spotify)',
    color: '#ffffff',
    border: '1px solid transparent'
  },
  apple: {
    background: 'var(--brand-apple)',
    color: '#ffffff',
    border: '1px solid transparent'
  }
};
const SIZE_STYLE = {
  sm: {
    padding: '8px 16px',
    fontSize: 13
  },
  md: {
    padding: '12px 24px',
    fontSize: 15
  },
  lg: {
    padding: '14px 28px',
    fontSize: 16
  }
};
let injected = false;
function ensureStyle() {
  if (injected) return;
  injected = true;
  const style = document.createElement('style');
  style.textContent = `
.cn-btn{font-family:var(--font-sans);font-weight:600;border-radius:var(--radius-md);cursor:pointer;display:inline-flex;align-items:center;gap:8px;justify-content:center;transition:opacity .15s ease,transform .1s ease,background-color .15s ease;white-space:nowrap;}
.cn-btn:hover{opacity:.88;}
.cn-btn:active{transform:scale(.97);}
.cn-btn[disabled]{opacity:.4;cursor:not-allowed;pointer-events:none;}
.cn-btn--pill{border-radius:var(--radius-full);}
`;
  document.head.appendChild(style);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  icon,
  disabled = false,
  onClick,
  style
}) {
  ensureStyle();
  return /*#__PURE__*/React.createElement("button", {
    className: `cn-btn${pill ? ' cn-btn--pill' : ''}`,
    style: {
      ...VARIANT_STYLE[variant],
      ...SIZE_STYLE[size],
      ...style
    },
    disabled: disabled,
    onClick: onClick
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
let injected = false;
function ensureStyle() {
  if (injected) return;
  injected = true;
  const style = document.createElement('style');
  style.textContent = `
.cn-chip{font-family:var(--font-sans);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:8px 20px;border-radius:var(--radius-full);cursor:pointer;transition:background-color .15s ease,color .15s ease,border-color .15s ease;border:1px solid var(--outline-variant);background:var(--surface-container);color:var(--on-surface);}
.cn-chip:hover{background:var(--surface-container-high);}
.cn-chip.cn-chip--active{background:var(--primary);color:var(--on-primary);border-color:transparent;}
`;
  document.head.appendChild(style);
}
function Chip({
  children,
  active = false,
  onClick
}) {
  ensureStyle();
  return /*#__PURE__*/React.createElement("button", {
    className: `cn-chip${active ? ' cn-chip--active' : ''}`,
    onClick: onClick
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function Footer({
  logo,
  tagline,
  columns = [],
  bottomLeft,
  bottomRight,
  socialIcons
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-container-lowest)',
      borderTop: '1px solid var(--outline-variant)',
      padding: '64px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-margin-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 64,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 629
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, logo), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--on-surface-variant)',
      lineHeight: 1.6,
      margin: '24px 0',
      width: 599,
      height: 149
    }
  }, tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, socialIcons)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
      gap: 24
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.heading
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--on-surface)',
      margin: '0 0 16px'
    }
  }, col.heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--on-surface-variant)',
      textDecoration: 'none',
      fontSize: 14,
      fontFamily: 'var(--font-sans)'
    }
  }, l)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--outline-variant)',
      paddingTop: 32,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--on-surface-variant)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, bottomLeft), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, bottomRight))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/media/HeroCarousel.jsx
try { (() => {
const {
  useState
} = React;
let injected = false;
function ensureStyle() {
  if (injected) return;
  injected = true;
  const style = document.createElement('style');
  style.textContent = `
.cn-hero{position:relative;width:100%;height:600px;overflow:hidden;background:var(--surface);container-type:inline-size;}
.cn-hero__slide{position:absolute;inset:0;opacity:0;transition:opacity .7s ease;pointer-events:none;}
.cn-hero__slide--active{opacity:1;pointer-events:auto;}
.cn-hero__slide img,.cn-hero__slide image-slot{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.cn-hero__scrim-side{position:absolute;inset:0;background:linear-gradient(to right,rgba(13,23,48,.9) 0%,rgba(13,23,48,.4) 50%,rgba(13,23,48,0) 100%);}
.cn-hero__scrim-bottom{position:absolute;inset:0;background:linear-gradient(to top,rgba(13,23,48,1) 0%,rgba(13,23,48,0) 60%);}
.cn-hero__content{position:relative;z-index:1;height:100%;display:flex;flex-direction:column;justify-content:center;max-width:640px;padding:0 var(--space-margin-desktop);padding-bottom:80px;box-sizing:border-box;}
.cn-hero__eyebrow{align-self:flex-start;padding:6px 12px;border-radius:var(--radius-sm);font-family:var(--font-sans);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:16px;}
.cn-hero__title{font-family:var(--font-sans);font-weight:var(--font-headline-weight);font-size:52px;line-height:1.05;letter-spacing:-0.01em;color:#fff;margin:0 0 16px;}
.cn-hero__desc{font-family:var(--font-sans);font-size:18px;line-height:1.6;color:var(--on-surface-variant);margin:0 0 32px;max-width:520px;}
.cn-hero__arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:2;width:48px;height:48px;border-radius:var(--radius-full);background:rgba(13,23,48,.5);backdrop-filter:blur(10px);border:1px solid var(--outline-variant);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:20px;}
.cn-hero__arrow--left{left:16px;}
.cn-hero__arrow--right{right:16px;}
.cn-hero__dots{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);z-index:2;display:flex;gap:10px;}
.cn-hero__dot{width:10px;height:10px;border-radius:var(--radius-full);background:rgba(255,255,255,.3);cursor:pointer;border:none;}
.cn-hero__dot--active{background:#fff;}

/* Mobile: measured against the hero's own width via container query, not viewport —
   shrink side padding, cap content to the available width, and scale the title down. */
@container (max-width: 520px){
  .cn-hero{height:70vh;min-height:420px;}
  .cn-hero__content{max-width:100%;padding:0 20px;padding-bottom:56px;justify-content:flex-end;}
  .cn-hero__title{font-size:28px;line-height:1.15;}
  .cn-hero__desc{font-size:15px;max-width:100%;margin-bottom:20px;}
  .cn-hero__arrow{width:36px;height:36px;font-size:16px;top:24px;transform:none;}
  .cn-hero__arrow--left{left:8px;}
  .cn-hero__arrow--right{right:8px;}
}
`;
  document.head.appendChild(style);
}
function HeroCarousel({
  slides = []
}) {
  ensureStyle();
  const [i, setI] = useState(0);
  const slide = slides[i];
  return /*#__PURE__*/React.createElement("div", {
    className: "cn-hero"
  }, slides.map((s, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: `cn-hero__slide${idx === i ? ' cn-hero__slide--active' : ''}`
  }, s.image, /*#__PURE__*/React.createElement("div", {
    className: "cn-hero__scrim-side"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cn-hero__scrim-bottom"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cn-hero__content"
  }, s.eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "cn-hero__eyebrow",
    style: {
      background: s.eyebrowColor || 'var(--accent-purple)',
      color: '#fff'
    }
  }, s.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "cn-hero__title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "cn-hero__desc"
  }, s.description), s.cta))), /*#__PURE__*/React.createElement("button", {
    className: "cn-hero__arrow cn-hero__arrow--left",
    onClick: () => setI((i - 1 + slides.length) % slides.length)
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    className: "cn-hero__arrow cn-hero__arrow--right",
    onClick: () => setI((i + 1) % slides.length)
  }, "\u203A"), /*#__PURE__*/React.createElement("div", {
    className: "cn-hero__dots"
  }, slides.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    className: `cn-hero__dot${idx === i ? ' cn-hero__dot--active' : ''}`,
    onClick: () => setI(idx)
  }))));
}
Object.assign(__ds_scope, { HeroCarousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/HeroCarousel.jsx", error: String((e && e.message) || e) }); }

// components/media/PodcastCallout.jsx
try { (() => {
function PodcastCallout({
  title = 'Luister naar onze podcast!',
  description,
  variant = 'banner',
  episodeLabel,
  ctaLabel = 'Luister Nu',
  icon
}) {
  if (variant === 'inline') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        background: 'var(--glass-tint)',
        backdropFilter: 'blur(20px)',
        borderRadius: 'var(--radius-xl)',
        padding: 24,
        overflow: 'hidden',
        border: '1px solid var(--hairline-on-dark)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -40,
        top: -40,
        width: 160,
        height: 160,
        background: 'color-mix(in oklch, var(--primary) 15%, transparent)',
        borderRadius: '50%',
        filter: 'blur(48px)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        flexShrink: 0,
        borderRadius: 'var(--radius-full)',
        background: 'var(--primary-container)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, icon || /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--on-primary-container)",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "2",
      width: "6",
      height: "12",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 10a7 7 0 0 0 14 0"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "22"
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 20,
        color: 'var(--on-surface)',
        margin: '0 0 4px'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        color: 'var(--on-surface-variant)',
        margin: '0 0 16px'
      }
    }, description), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "primary",
      pill: true,
      size: "sm"
    }, ctaLabel))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-container-high)',
      borderRadius: 'var(--radius-xl)',
      padding: 32,
      border: '1px solid var(--hairline-on-dark)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-headline-md-size)',
      color: 'var(--on-surface)',
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md-size)',
      color: 'var(--on-surface-variant)',
      margin: 0
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "spotify",
    pill: true
  }, "Spotify"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "apple",
    pill: true
  }, "Apple")));
}
Object.assign(__ds_scope, { PodcastCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PodcastCallout.jsx", error: String((e && e.message) || e) }); }

// components/media/PodcastPlayer.jsx
try { (() => {
function PodcastPlayer({
  episodeTitle,
  progress = 0.33,
  currentTime = '12:45',
  totalTime = '42:10'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(13,23,48,0.6)',
      backdropFilter: 'blur(20px)',
      padding: 16,
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--outline-variant)',
      width: '100%',
      maxWidth: 420,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 48,
      height: 48,
      flexShrink: 0,
      borderRadius: 'var(--radius-full)',
      background: 'var(--accent-blue)',
      color: '#fff',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      cursor: 'pointer'
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement("div", {
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#fff',
      marginBottom: 6
    }
  }, episodeTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      width: '100%',
      background: 'var(--surface-container-high)',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${progress * 100}%`,
      background: 'var(--accent-blue)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 12,
      color: 'var(--on-surface-variant)'
    }
  }, /*#__PURE__*/React.createElement("span", null, currentTime), /*#__PURE__*/React.createElement("span", null, totalTime)));
}
Object.assign(__ds_scope, { PodcastPlayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PodcastPlayer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--on-surface-variant)'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: item
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: i === items.length - 1 ? 'var(--primary)' : 'var(--on-surface-variant)',
      textDecoration: 'none'
    }
  }, item))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
let injected = false;
function ensureStyle() {
  if (injected) return;
  injected = true;
  const style = document.createElement('style');
  style.textContent = `
.cn-header{position:sticky;top:0;z-index:50;background:rgba(13,23,48,0.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--outline-variant);}
.cn-header__inner{max-width:var(--container-max);margin:0 auto;padding:0 var(--space-margin-desktop);height:64px;display:flex;align-items:center;justify-content:space-between;gap:16px;container-type:inline-size;}
.cn-header__logo-link{display:flex;align-items:center;flex-shrink:0;text-decoration:none;}
.cn-header__logo{height:28px;display:block;flex-shrink:0;}
.cn-header__nav{display:flex;gap:4px;min-width:0;}
.cn-header__link{font-family:var(--font-sans);font-size:14px;font-weight:500;color:var(--on-surface-variant);padding:10px 12px;text-decoration:none;border-bottom:2px solid transparent;transition:color .15s ease;white-space:nowrap;flex-shrink:0;}
.cn-header__link:hover{color:var(--on-surface);}
.cn-header__link--active{color:var(--on-surface);border-bottom-color:var(--accent-blue);}
.cn-header__partner{display:flex;align-items:center;gap:10px;font-family:var(--font-sans);font-size:13px;color:var(--on-surface-variant);white-space:nowrap;flex-shrink:0;}
.cn-header__burger{display:none;flex-shrink:0;width:40px;height:40px;align-items:center;justify-content:center;background:none;border:1px solid var(--outline-variant);border-radius:var(--radius-md);color:var(--on-surface);cursor:pointer;}

/* Collapse nav into a hamburger once it no longer fits — measured against the header's
   own width via a container query, not the viewport, so this works at any embed size.
   Layout becomes a 3-slot mobile top bar: burger left, logo centered, partner icon-only right. */
@container (max-width: 720px){
  .cn-header__nav{display:none;}
  .cn-header__inner{padding:0 16px;}
  .cn-header__burger{display:flex;order:-2;}
  .cn-header__logo-link{order:-1;flex:1;justify-content:center;}
  .cn-header__partner{order:1;}
  .cn-header__partner-label{display:none;}
}

.cn-drawer-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:200;display:flex;}
.cn-drawer{width:320px;max-width:82vw;height:100%;background:var(--surface-container-high);padding:28px 20px 20px;box-sizing:border-box;display:flex;flex-direction:column;border-radius:0 20px 20px 0;overflow-y:auto;font-family:var(--font-sans);}
.cn-drawer__top{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;}
.cn-drawer__logo{display:flex;align-items:center;gap:8px;}
.cn-drawer__close{background:none;border:none;color:var(--on-surface);font-size:22px;cursor:pointer;line-height:1;padding:4px;}
.cn-drawer__link{display:flex;align-items:center;gap:16px;padding:14px 16px;border-radius:var(--radius-lg);color:var(--on-surface);text-decoration:none;font-size:16px;margin-bottom:4px;}
.cn-drawer__link svg{flex-shrink:0;opacity:.85;}
.cn-drawer__link--active{background:var(--surface-container-highest);}
.cn-drawer__divider{border-top:1px solid var(--outline-variant);margin:16px 0;}
.cn-drawer__partner-label{text-align:center;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--on-surface-variant);margin-bottom:12px;}
.cn-drawer__footer{margin-top:auto;text-align:center;font-size:12px;color:var(--on-surface-variant);padding-top:16px;}
`;
  document.head.appendChild(style);
}
function Header({
  logo,
  links = [],
  linkIcons = [],
  activeIndex = 0,
  partnerLabel,
  partnerLogo,
  onLinkClick,
  mobileCopyright
}) {
  ensureStyle();
  const [open, setOpen] = React.useState(false);
  const handleLink = i => e => {
    e.preventDefault();
    setOpen(false);
    if (onLinkClick) onLinkClick(i);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "cn-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cn-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "cn-header__logo-link"
  }, logo), /*#__PURE__*/React.createElement("nav", {
    className: "cn-header__nav"
  }, links.map((label, i) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: onLinkClick ? handleLink(i) : undefined,
    className: `cn-header__link${i === activeIndex ? ' cn-header__link--active' : ''}`
  }, label))), partnerLogo && /*#__PURE__*/React.createElement("div", {
    className: "cn-header__partner"
  }, partnerLabel && /*#__PURE__*/React.createElement("span", {
    className: "cn-header__partner-label"
  }, partnerLabel), partnerLogo), /*#__PURE__*/React.createElement("button", {
    className: "cn-header__burger",
    "aria-label": "Menu",
    onClick: () => setOpen(true)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }))))), open && /*#__PURE__*/React.createElement("div", {
    className: "cn-drawer-overlay",
    onClick: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "cn-drawer",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "cn-drawer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cn-drawer__logo"
  }, logo), /*#__PURE__*/React.createElement("button", {
    className: "cn-drawer__close",
    "aria-label": "Sluiten",
    onClick: () => setOpen(false)
  }, "\u2715")), links.map((label, i) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: onLinkClick ? handleLink(i) : () => setOpen(false),
    className: `cn-drawer__link${i === activeIndex ? ' cn-drawer__link--active' : ''}`
  }, linkIcons[i], label)), partnerLogo && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cn-drawer__divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cn-drawer__partner-label"
  }, partnerLabel || 'Partner van'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 8
    }
  }, partnerLogo)), mobileCopyright && /*#__PURE__*/React.createElement("div", {
    className: "cn-drawer__footer"
  }, mobileCopyright))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
let injected = false;
function ensureStyle() {
  if (injected) return;
  injected = true;
  const style = document.createElement('style');
  style.textContent = `
.cn-page{width:40px;height:40px;border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;font-family:var(--font-sans);font-size:12px;font-weight:700;letter-spacing:.08em;background:var(--surface-container);border:1px solid var(--outline-variant);color:var(--on-surface);cursor:pointer;transition:border-color .15s ease,color .15s ease;}
.cn-page:hover{color:var(--primary);border-color:var(--primary);}
.cn-page--active{background:var(--primary);color:var(--on-primary);border-color:transparent;}
.cn-page--active:hover{color:var(--on-primary);}
.cn-page:disabled{opacity:.4;cursor:not-allowed;}
.cn-page--ellipsis{background:none;border:none;cursor:default;color:var(--on-surface-variant);}
`;
  document.head.appendChild(style);
}
function Pagination({
  page = 1,
  totalPages = 12,
  onChange
}) {
  ensureStyle();
  const pages = [1, 2, 3, '…', totalPages];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "cn-page",
    disabled: page === 1,
    onClick: () => onChange && onChange(page - 1)
  }, "\u2039"), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "cn-page cn-page--ellipsis"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: i,
    className: `cn-page${p === page ? ' cn-page--active' : ''}`,
    onClick: () => onChange && onChange(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    className: "cn-page",
    disabled: page === totalPages,
    onClick: () => onChange && onChange(page + 1)
  }, "\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(0,0,0,.12);border-top-color:rgba(0,0,0,.45);' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website-mobile/MobileArticleDetail.jsx
try { (() => {
const {
  ArticleCard,
  PodcastCallout
} = window.CinematenDesignSystem_d9e7a8;
const related = [{
  id: 'm-art-rel-1',
  tag: 'Recensie',
  title: 'The Last of Us Seizoen 2 start met filmen in februari',
  meta: '2 dagen geleden'
}, {
  id: 'm-art-rel-2',
  tag: 'Nieuws',
  title: 'Ghost of Tsushima film krijgt regisseur van John Wick',
  meta: '5 dagen geleden'
}, {
  id: 'm-art-rel-3',
  tag: 'Achtergrond',
  title: 'Waarom we opeens zoveel game-verfilmingen zien',
  meta: '1 week geleden'
}];
function ShareButton({
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-container)',
      border: 'none',
      color: 'var(--on-surface-variant)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, children);
}
function MobileArticleDetail() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4/3'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "m-art-hero",
    placeholder: "Article hero \u2014 God of War",
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(13,23,48,1) 0%, rgba(13,23,48,.4) 55%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--primary)',
      color: 'var(--on-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)'
    }
  }, "News"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--on-surface-variant)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12
    }
  }, "\u23F1 3 min read")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 30,
      lineHeight: 1.15,
      color: 'var(--on-surface)',
      margin: 0
    }
  }, "God of War-serie moet op zoek naar een nieuwe Kratos"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--on-surface-variant)',
      marginTop: 8
    }
  }, "Door ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--on-surface)',
      fontWeight: 600
    }
  }, "Redactie"), " \xB7 24 Oktober 2023"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--on-surface-variant)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--on-surface)',
      fontWeight: 600
    }
  }, "Slecht nieuws voor fans die uitkeken naar de live-action adaptatie van de iconische PlayStation-franchise ", /*#__PURE__*/React.createElement("em", null, "God of War"), ". De productie bij Amazon Prime Video heeft een flinke tegenslag te verwerken gekregen."), /*#__PURE__*/React.createElement("p", null, "Volgens bronnen dicht bij het project liepen de creatieve visies van de oorspronkelijke showrunners en Amazon Studios te ver uiteen."), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: '32px 0'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "m-art-figure",
    placeholder: "Kratos still",
    style: {
      display: 'block',
      width: '100%',
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 13,
      textAlign: 'center',
      marginTop: 8,
      opacity: .8
    }
  }, "De iconische look van Kratos in de recente games zal moeilijk te evenaren zijn.")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--on-surface)',
      margin: '32px 0 12px'
    }
  }, "Een Nieuwe Richting"), /*#__PURE__*/React.createElement("p", null, "Amazon is naar verluidt op zoek naar een nieuwe schrijver die de rauwe, brute actie van de originele games beter weet te balanceren met het diepgaande vader-zoon drama."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '32px 0'
    }
  }, /*#__PURE__*/React.createElement(PodcastCallout, {
    variant: "inline",
    title: "Cinematen Podcast #42",
    description: "Wij bespreken de vloek van video game verfilmingen en wie volgens ons de ideale Kratos zou zijn.",
    ctaLabel: "Luister Nu"
  })), /*#__PURE__*/React.createElement("p", null, "Wie de zware taak op zich neemt om in de voetsporen te treden van Christopher Judge blijft de grote vraag."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px solid var(--outline-variant)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--on-surface)',
      fontWeight: 600,
      fontSize: 14
    }
  }, "Deel dit artikel:"), /*#__PURE__*/React.createElement(ShareButton, {
    label: "Kopieer link"
  }, "\uD83D\uDD17"), /*#__PURE__*/React.createElement(ShareButton, {
    label: "E-mail"
  }, "\u2709\uFE0F"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '24px 16px',
      background: 'var(--surface-container-lowest)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--on-surface)',
      margin: '0 0 16px'
    }
  }, "\u2728 Misschien ook interessant"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, related.map(r => /*#__PURE__*/React.createElement(ArticleCard, {
    key: r.id,
    variant: "row",
    href: "#",
    image: /*#__PURE__*/React.createElement("image-slot", {
      id: r.id,
      placeholder: "Related still"
    }),
    title: r.title,
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--primary)',
        textTransform: 'uppercase'
      }
    }, r.tag), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, r.meta))
  })))));
}
window.MobileArticleDetail = MobileArticleDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-mobile/MobileArticleDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-mobile/MobileHomepage.jsx
try { (() => {
const {
  Badge,
  Button,
  HeroCarousel,
  ArticleCard
} = window.CinematenDesignSystem_d9e7a8;
const newsItems = [{
  id: 'm-grid-1',
  tag: 'Casting',
  title: 'Nieuwe Cyberpunk Thriller Condenses Cast: Grote Namen Toegevoegd',
  excerpt: 'De langverwachte verfilming van de cult-klassieker kondigt vandaag drie nieuwe castleden aan, waaronder een bekende Oscar-winnaar.'
}, {
  id: 'm-grid-2',
  tag: 'Productie',
  title: 'Opnames Gestart voor Historisch Epos in de Sahara',
  excerpt: 'Na maanden van vertraging zijn de opnames eindelijk van start gegaan. De eerste beelden vanaf de set beloven een visueel spektakel.'
}, {
  id: 'm-grid-3',
  tag: 'Review',
  title: 'Is de Remake van Deze 80s Klassieker Het Kijken Waard?',
  excerpt: 'We duiken in de nieuwe versie van een geliefde film.'
}, {
  id: 'm-grid-4',
  tag: 'Industrie',
  title: 'Streamingdiensten Verhogen Prijzen Opnieuw: Wat Betekent Dit Voor Jou?',
  excerpt: 'Een overzicht van de recente prijsstijgingen in streamingland.'
}];
const blogItems = [{
  id: 'm-blog-1',
  tag: 'Review',
  rating: '4.5',
  title: 'Spaceman: Een Eenzame Reis Naar de Ziel',
  excerpt: 'Adam Sandler levert een verrassend ingetogen prestatie in deze melancholische sci-fi film.',
  meta: 'Door Joris Peeters · 2 dagen geleden'
}, {
  id: 'm-blog-2',
  tag: 'Editorial',
  title: 'De Wederopstanding van Analoge Film in Hollywood',
  excerpt: 'Steeds meer regisseurs keren terug naar 35mm en 70mm film.',
  meta: 'Door Sarah Vermeulen · 5 dagen geleden'
}, {
  id: 'm-blog-3',
  tag: 'Review',
  rating: '3.0',
  title: 'Actie Spektakel Verliest Zich in Chaos',
  excerpt: 'Hoewel de choreografie indrukwekkend is, ontbreekt het deze nieuwste blockbuster aan een verhaal.',
  meta: 'Door Tom De Smet · 1 week geleden'
}];
function MobileHomepage({
  onOpenArticle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(HeroCarousel, {
    slides: [{
      image: /*#__PURE__*/React.createElement("image-slot", {
        id: "m-hero",
        placeholder: "Hero still \u2014 Gladiator II"
      }),
      title: 'Gladiator II - Het langverwachte vervolg',
      description: 'Beleef het epische verhaal van Lucius in het hart van het Romeinse Rijk.',
      cta: /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        onClick: onOpenArticle
      }, "Lees meer \u2192")
    }]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '32px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-headline-md-size)',
      color: 'var(--on-surface)',
      margin: 0
    }
  }, "Film & TV nieuws"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, "Alle nieuws \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, newsItems.map(n => /*#__PURE__*/React.createElement(ArticleCard, {
    key: n.id,
    variant: "default",
    onClick: onOpenArticle,
    href: "#",
    image: /*#__PURE__*/React.createElement("image-slot", {
      id: n.id,
      placeholder: "News still"
    }),
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        color: 'var(--primary)',
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        marginBottom: 6
      }
    }, n.tag), n.title),
    excerpt: n.excerpt
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-container-high)',
      borderRadius: 'var(--radius-2xl)',
      padding: 24,
      border: '1px solid var(--hairline-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#1f2937',
      color: 'var(--on-surface)',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)'
    }
  }, "Nieuwe Aflevering")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--on-surface)',
      margin: '0 0 12px'
    }
  }, "De Cinematen Podcast: Diepgaande Analyse van Dune 2"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--on-surface-variant)',
      margin: '0 0 20px'
    }
  }, "In deze aflevering bespreken we de visuele pracht en de meesterlijke regie van Denis Villeneuve's sci-fi epos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    pill: true,
    onClick: onOpenArticle
  }, "\u25B6 Luister Nu (45:12)"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    pill: true
  }, "Alle Afleveringen")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-headline-md-size)',
      color: 'var(--on-surface)',
      margin: '0 0 16px'
    }
  }, "Blogs & Reviews"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, blogItems.map(b => /*#__PURE__*/React.createElement(ArticleCard, {
    key: b.id,
    variant: "default",
    onClick: onOpenArticle,
    href: "#",
    image: /*#__PURE__*/React.createElement("image-slot", {
      id: b.id,
      placeholder: "Article still"
    }),
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'var(--primary)',
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, b.tag), b.rating && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--primary)'
      }
    }, "\u2605 ", b.rating)), b.title),
    excerpt: b.excerpt,
    meta: /*#__PURE__*/React.createElement("span", null, b.meta)
  })))));
}
window.MobileHomepage = MobileHomepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-mobile/MobileHomepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-mobile/MobileOverview.jsx
try { (() => {
const {
  Chip,
  ArticleCard,
  Button
} = window.CinematenDesignSystem_d9e7a8;
const items = [{
  id: 'm-ov-1',
  tag: 'Film',
  title: 'Nieuwe beelden van aankomende thriller onthuld',
  date: '12 Okt 2024'
}, {
  id: 'm-ov-2',
  tag: 'TV',
  title: 'Populaire sci-fi serie vernieuwd voor derde seizoen',
  date: '11 Okt 2024'
}, {
  id: 'm-ov-3',
  tag: 'Interview',
  title: 'Exclusief: Regisseur bespreekt zijn visie voor de remake',
  date: '10 Okt 2024'
}, {
  id: 'm-ov-4',
  tag: 'Film',
  title: 'Cast uitbreiding voor het langverwachte actie-epos',
  date: '09 Okt 2024'
}, {
  id: 'm-ov-5',
  tag: 'TV',
  title: 'Streamingdienst kondigt klassieke filmcollectie aan',
  date: '08 Okt 2024'
}];
function MobileOverview({
  onOpenArticle
}) {
  const [filter, setFilter] = React.useState('Alles');
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '24px 16px 48px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 32,
      color: 'var(--on-surface)',
      margin: '0 0 8px'
    }
  }, "Film & TV Nieuws"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--on-surface-variant)',
      margin: '0 0 24px'
    }
  }, "De laatste nieuwtjes uit de film- en televisiewereld."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 24,
      overflowX: 'auto'
    }
  }, ['Alles', 'Film nieuws', 'TV nieuws'].map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    active: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map(it => /*#__PURE__*/React.createElement(ArticleCard, {
    key: it.id,
    variant: "row",
    onClick: onOpenArticle,
    href: "#",
    image: /*#__PURE__*/React.createElement("image-slot", {
      id: it.id,
      placeholder: "Thumbnail"
    }),
    title: it.title,
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--primary)',
        textTransform: 'uppercase'
      }
    }, it.tag), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, it.date))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    pill: true
  }, "Laad meer \u2304")));
}
window.MobileOverview = MobileOverview;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-mobile/MobileOverview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ArticleDetail.jsx
try { (() => {
const {
  Breadcrumb,
  ArticleCard,
  PodcastCallout
} = window.CinematenDesignSystem_d9e7a8;
const related = [{
  id: 'art-related-1',
  title: 'Netflix smijt miljarden in content',
  excerpt: 'Ted Sarandos deelt zijn visie op de toekomst van het platform en de rol van AI in Hollywood.'
}, {
  id: 'art-related-2',
  title: 'Nieuwe gezichten voor The Grand Tour',
  excerpt: 'Na het vertrek van Clarkson, Hammond en May moet Amazon op zoek naar een nieuw trio.'
}, {
  id: 'art-related-3',
  title: 'The Holdovers Review',
  excerpt: 'Paul Giamatti schittert in deze hartverwarmende kerstklassieker van regisseur Alexander Payne.'
}];
function ArticleDetail({
  onOpenArticle,
  onGoHome
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      width: '100%',
      height: '60vh',
      minHeight: 420,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "art-hero",
    placeholder: "Article hero \u2014 God of War",
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(13,23,48,.95) 0%, rgba(13,23,48,.3) 55%, transparent 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-margin-desktop)',
      paddingBottom: 48,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ['Home', 'Nieuws', 'TV Nieuws']
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      letterSpacing: '-0.01em',
      fontSize: 52,
      lineHeight: 1.05,
      color: 'var(--on-surface)',
      margin: '0 0 24px',
      maxWidth: 780
    }
  }, "God of War-serie moet op zoek naar een nieuwe Kratos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--on-surface-variant)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "17-07-2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#1f2937',
      color: 'var(--on-surface)',
      borderRadius: 'var(--radius-full)',
      padding: '4px 10px'
    }
  }, "3 min leestijd")))), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '48px var(--space-margin-mobile) 64px',
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--on-surface)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 700,
      color: 'var(--primary)'
    }
  }, "De langverwachte God of War tv-serie voor Amazon Prime Video heeft een flinke tegenslag te verwerken gekregen. De originele showrunner, Rafe Judkins, heeft het project verlaten vanwege \"creatieve verschillen\" met Sony en Amazon."), /*#__PURE__*/React.createElement("p", null, "Volgens Deadline zijn ook uitvoerend producenten Hawk Ostby en Mark Fergus vertrokken. Het drietal had al meerdere scripts voltooid voor het eerste seizoen."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      margin: '40px 0 16px'
    }
  }, "Wie is de nieuwe showrunner?"), /*#__PURE__*/React.createElement("p", null, "Het is nog onduidelijk wie Judkins, Ostby en Fergus gaat vervangen. Cory Barlog is wel nog steeds betrokken bij het project als uitvoerend producent."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(PodcastCallout, {
    description: "Elke week een nieuwe aflevering met het laatste film- en serienieuws."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-container-lowest)',
      padding: '64px 0',
      borderTop: '1px solid var(--outline-variant)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-margin-desktop)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 30,
      color: '#fff',
      margin: '0 0 32px'
    }
  }, "Misschien ook interessant"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-gutter)'
    }
  }, related.map(r => /*#__PURE__*/React.createElement(ArticleCard, {
    key: r.id,
    variant: "default",
    onClick: onOpenArticle,
    href: "#",
    image: /*#__PURE__*/React.createElement("image-slot", {
      id: r.id,
      placeholder: "Related still"
    }),
    title: r.title,
    excerpt: r.excerpt
  }))))));
}
window.ArticleDetail = ArticleDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ArticleDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
const {
  Badge,
  Button,
  ArticleCard,
  HeroCarousel,
  PodcastPlayer,
  PodcastCallout
} = window.CinematenDesignSystem_d9e7a8;
const newsItems = [{
  id: 'home-grid-1',
  badge: 'TV',
  title: 'God of War-serie',
  excerpt: 'God of War-serie is aangekondigd voor streaming. Veel fans wachten op deze epische verfilming...',
  date: '20.03.2024'
}, {
  id: 'home-grid-2',
  badge: 'Film',
  title: 'Netflix smijt miljarden in content',
  excerpt: 'Netflix blijft miljarden investeren in nieuwe producties om de concurrentie voor te blijven...',
  date: '08.05.2024'
}, {
  id: 'home-grid-3',
  badge: 'TV',
  title: 'The Grand Tour nieuwe gezichten',
  excerpt: 'The Grand Tour verwelkomt nieuwe gasten en belooft weer een seizoen vol spectaculaire ritten...',
  date: '03.05.2024'
}, {
  id: 'home-grid-4',
  badge: 'Podcast',
  title: 'Netflix lanceert nieuwe show/podcast!',
  excerpt: 'De nieuwe podcast serie belooft een uniek kijkje achter de schermen bij populaire series...',
  date: '01.05.2024'
}];
const blogItems = [{
  id: 'home-blog-1',
  tag: 'REVIEW',
  kind: 'review',
  title: 'Oppenheimer: Een visueel spektakel',
  excerpt: "Een diepgaande blik op Nolan's nieuwste meesterwerk. De cinematografie en geluidsontwerp zijn ongekend...",
  meta: '9/10 · 5 min leestijd'
}, {
  id: 'home-blog-2',
  tag: 'BLOG',
  kind: 'blog',
  title: 'De evolutie van Sci-Fi in de 21e eeuw',
  excerpt: 'Van Matrix tot Interstellar, hoe het genre zich heeft ontwikkeld en wat we nog kunnen verwachten...',
  meta: 'Door redactie · Gisteren'
}, {
  id: 'home-blog-3',
  tag: 'RETRO REVIEW',
  kind: 'retro',
  title: 'Blade Runner (1982): Blijft het overeind?',
  excerpt: "Een retrospectieve blik op de klassieker van Ridley Scott. Zijn de thema's vandaag de dag nog relevanter?",
  meta: '8.5/10 · 12 Mei'
}];
function Homepage({
  onOpenArticle
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroCarousel, {
    slides: [{
      image: /*#__PURE__*/React.createElement("image-slot", {
        id: "home-hero-1",
        placeholder: "Hero still \u2014 Dune: Part Two"
      }),
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "Dune: Part Two - Epic", /*#__PURE__*/React.createElement("br", null), "Sci-Fi Masterpiece"),
      description: 'Beleef de epische reis van Paul Atreides terwijl hij zich verenigt met Chani en de Vrijmans om wraak te nemen op de samenzweerders.',
      cta: /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        size: "lg",
        onClick: onOpenArticle
      }, "Lees meer")
    }, {
      image: /*#__PURE__*/React.createElement("image-slot", {
        id: "home-hero-2",
        placeholder: "Hero still \u2014 God of War"
      }),
      eyebrow: 'Streaming Nieuws',
      eyebrowColor: 'var(--accent-purple)',
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "God of War: De", /*#__PURE__*/React.createElement("br", null), "Goden Ontwaken"),
      description: 'Kratos en Atreus maken de overstap naar het kleine scherm. Alles wat we weten over de aankomende Amazon Prime serie.',
      cta: /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        size: "lg",
        onClick: onOpenArticle
      }, "Lees meer")
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '-80px auto 0',
      position: 'relative',
      zIndex: 5,
      padding: '0 var(--space-margin-desktop) 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 30,
      color: '#fff',
      margin: 0
    }
  }, "Film & TV nieuws")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-gutter)'
    }
  }, newsItems.map(n => /*#__PURE__*/React.createElement(ArticleCard, {
    key: n.id,
    variant: "overlay",
    onClick: onOpenArticle,
    href: "#",
    image: /*#__PURE__*/React.createElement("image-slot", {
      id: n.id,
      placeholder: "News still"
    }),
    badge: /*#__PURE__*/React.createElement(Badge, {
      kind: "category"
    }, n.badge),
    title: n.title,
    excerpt: n.excerpt,
    meta: /*#__PURE__*/React.createElement("span", null, n.date)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-margin-desktop) 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-container)',
      borderRadius: 'var(--radius-2xl)',
      padding: 48,
      display: 'flex',
      gap: 48,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--accent-blue)',
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontSize: 13
    }
  }, "Nu te beluisteren"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 36,
      color: '#fff',
      margin: '8px 0'
    }
  }, "Cinematen Podcast"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--on-surface-variant)',
      margin: '0 0 24px'
    }
  }, "De wekelijkse podcast over film en TV"), /*#__PURE__*/React.createElement(PodcastPlayer, {
    episodeTitle: "S04E12: De toekomst van cinema",
    progress: 0.33
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280,
      height: 260,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "home-podcast-photo",
    placeholder: "Podcast hosts photo",
    style: {
      borderRadius: 'var(--radius-xl)',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-container-lowest)',
      padding: '64px 0',
      borderTop: '1px solid var(--outline-variant)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-margin-desktop)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 30,
      color: '#fff',
      margin: '0 0 8px'
    }
  }, "Blogs & Reviews"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--on-surface-variant)',
      margin: '0 0 32px'
    }
  }, "Diepgaande analyses en de nieuwste recensies."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32
    }
  }, blogItems.map(b => /*#__PURE__*/React.createElement(ArticleCard, {
    key: b.id,
    variant: "default",
    onClick: onOpenArticle,
    href: "#",
    image: /*#__PURE__*/React.createElement("image-slot", {
      id: b.id,
      placeholder: "Article still"
    }),
    badge: /*#__PURE__*/React.createElement(Badge, {
      kind: b.kind
    }, b.tag),
    title: b.title,
    excerpt: b.excerpt,
    meta: /*#__PURE__*/React.createElement("span", null, b.meta)
  }))))));
}
window.Homepage = Homepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Overview.jsx
try { (() => {
const {
  Chip,
  ArticleCard,
  Pagination
} = window.CinematenDesignSystem_d9e7a8;
const items = [{
  id: 'ov-grid-1',
  tag: 'TV',
  title: 'God of War-serie vindt showrunner in Ronald D. Moore',
  excerpt: 'De langverwachte adaptatie van de populaire PlayStation-game heeft een belangrijke stap gezet met het aantrekken van de ervaren Battlestar Galactica-producent.',
  date: '17-07-2026'
}, {
  id: 'ov-grid-2',
  tag: 'Film',
  title: 'Netflix smijt miljarden naar nieuwe sciencefiction franchise',
  excerpt: 'De streaminggigant investeert zwaar in een ambitieus nieuw universum van de makers van The Expanse, met meerdere films en spin-offs in de planning.',
  date: '16-07-2026'
}, {
  id: 'ov-grid-3',
  tag: 'TV',
  title: 'The Grand Tour zoekt nieuwe gezichten voor reboot',
  excerpt: 'Na het vertrek van Clarkson, Hammond en May overweegt Amazon Prime een vernieuwde opzet van het populaire autoprogramma met een volledig nieuwe cast.',
  date: '15-07-2026'
}, {
  id: 'ov-grid-4',
  tag: 'Podcast',
  title: 'Nieuwe aflevering: De impact van AI op Hollywood scriptschrijvers',
  excerpt: "In onze wekelijkse podcast bespreken we de nasleep van de stakingen en hoe studio's momenteel experimenteren met generatieve AI voor vroege scriptversies.",
  date: '14-07-2026'
}];
function Overview({
  onOpenArticle
}) {
  const [filter, setFilter] = React.useState('Alles');
  const [page, setPage] = React.useState(1);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px var(--space-margin-desktop) 64px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 40,
      color: 'var(--on-surface)',
      margin: '0 0 16px'
    }
  }, "Film & TV Nieuws"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--on-surface-variant)',
      maxWidth: 700,
      margin: '0 0 32px'
    }
  }, "Blijf op de hoogte van de laatste nieuwtjes, casting updates, trailers en geruchten uit de wondere wereld van cinema en televisie."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 40
    }
  }, ['Alles', 'Film nieuws', 'TV nieuws'].map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    active: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-gutter)',
      marginBottom: 48
    }
  }, items.map(it => /*#__PURE__*/React.createElement(ArticleCard, {
    key: it.id,
    variant: "default",
    onClick: onOpenArticle,
    href: "#",
    image: /*#__PURE__*/React.createElement("image-slot", {
      id: it.id,
      placeholder: "News thumbnail"
    }),
    badge: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--primary)',
        background: 'rgba(13,23,48,.8)',
        border: '1px solid var(--primary-fixed-dim)',
        borderRadius: 'var(--radius-full)',
        padding: '5px 10px'
      }
    }, it.tag),
    title: it.title,
    excerpt: it.excerpt,
    meta: /*#__PURE__*/React.createElement("span", null, it.date)
  }))), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    totalPages: 12,
    onChange: setPage
  }));
}
window.Overview = Overview;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Overview.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.HeroCarousel = __ds_scope.HeroCarousel;

__ds_ns.PodcastCallout = __ds_scope.PodcastCallout;

__ds_ns.PodcastPlayer = __ds_scope.PodcastPlayer;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Pagination = __ds_scope.Pagination;

})();
