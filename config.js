const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VW23LbNhD9F7z6TIPFHZrxTFXf61i+yI4dd/zAiJDMRqIUkrKjZPzvnQVtpw9t6o4eJIHA4uzZc3b5XdTLqk3HaSMG38WqqR6KLvHPbrNKYiB+W0+nqREQZdEVYvCHkhJegXSEDVDSITiQdjAG2oA8lIaOUMZCyQjSBKUCYgRFDWUklCFQBAUPpTSUzKskLch6WAeSAWQMDMG5uyeI1frTvJr8BBUpkI+I/CVBlAN7Bc3BFJTy8BZEGpExKtgIMg4qgLxlyEo5UCCG7iOUlVCSECI0yBnEAGUYlQSZuyfGVFRNVc/2VvdpkZpifpw2Z0XVvI1FE8A3UIQiA8uZRxBZRA/SHhSgbE7HUqYj02agOBmdidUgQwg5WQmlLZTJOZOJIKc4U2Yh6jcxaD3IWDjOHUpaSOQyERQFmAgdQLEHqbmsClxOpUDOwyiQzOxonTFbmxVAIWYeWRBSgciBDMsmU9hWszqVR2Wqu6rbvF2CJjMTVF8ORqMCFCkoq0HRgZwG6QDtWZZKK1BmzeWdZFRmMMpeobJ/TBZkPJQ0cAFKSZAiEEh5RPsmErOIyOP5doWgcmXIGzgGwuHIQHPBAjSCBzGF+V7F1VOseVgDUvAETiZaGJaFgWc5x4zmlb6z5sW8n/+PAmXmMGqQstkmziCwP3NZuZiSelV5sDR6U7Ll2eLG5Ty4lk73REqQNeyrXoo2e4sFIwkxvo0+6bmpsPV9X4EYM2lW5raguGFYEOvd9rK3BE2Zw0DZAAwzsI1Yw94/H+KUXBZtbj5OZ1GE+Mpj0a2bn9HFPYNDkfdgq7BPApyE0Zk2tqlyzx7V3Dc8ZUXxGWl6zBSZXBOYekZtieVJbHZt4PrIHMGaPqLsO6zKbpKgKPMtWufj3BP0MyXcermgmlhz7AnG1p9yvpc+MxAkIuVtjvnibq17PiRHJK7T57Q5KsWAniCaNKvarim6alnnNUcQRfkwTpMmdVl3Ir2Pxw+H89HB7Mv0cX1/c2a/7J6entf1TTg4nxf7UVYTf+UaX4ZtAbFqlpPUtqk8rNpu2WxOUtsWs9SKwR93EHX62vWK5us0QUyrpu2u6vVqvizKF7m/PCwmk+W67saberLDP1IjBvLHcuq6qp61XNd1XTST++oh7dwXXSsG02LeptcMU5NKMeiadXpt7DvLkoVwGQ/d/u7OlYBYZIFUpRgIpY2X2ktpraSB/7X95ZHDFqvVL3XqBMQ8b4tOOe2V8t7YIAf+V15+esXH4crUFdW8FQOxM0qKtuTu3ul4vgrh4GB4MhvuzIbiRz4vQu2JH48+b308+FjeNvf24tPt7d7Z0cScfP0wXF9fxPP9q/byfv2hWKT2/Gr7H4KIgfhzQffvts5u4js5HO/OfP3x9GJfXZrho11c7a0ORu1WuRzNth7/9Fuzdnx0rc9Pyt2LWDwe3d64w2mcHvuzOB59Wvn1vj1ejLamxfBxm28r00M1SX+/bLwY24dwelocfBttXe9/2zTavrv4cvL77cHO4efF4/Dj5fnDh2q9tXm/d9j9Xu3br/r96FsaLU+HM7o+Pu6OHqfDm+l6cf3beLn6sOiOb+9n29vixcLz50lSZTFxpfjvtEq5JdYF1++/K9cDZ4HJJ/wtxnOT/bfx2fduDx68zy8dz6MlmDxIXMwjK/BwhuIRxC3O5HkTLPglJeYRnOcm+JTv34ZI8gZuOdx/8+rd09MdxGpedNNlsxADUdRls6xKAdEs1yz6o3q6/AneANII+ZNH27xou+EPM11Wi9R2xWIlBuS9i5qsM09/Aacz7LgsCgAA",
    // PREFIX supports comma-separated list: ".,!,/,?"
    // Use "any" to accept any leading symbol, or "" / "none" for no prefix
    PREFIX:                process.env.PREFIX || ".",
    BOT_NAME:              process.env.BOT_NAME || "Silva MD",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "2347037005501",
    OWNER_NAME:            process.env.OWNER_NAME || "EctoRhymez",
    DESCRIPTION:           process.env.DESCRIPTION || "EctoRhymez Bot",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG:              process.env.LIVE_MSG || "Silva MD is active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by Silva MD",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    Status_Saver:          process.env.Status_Saver  || process.env.STATUS_SAVER  || 'false',
    STATUS_REPLY:          process.env.STATUS_REPLY  || 'false',
    STATUS_MSG:            process.env.STATUS_MSG    || 'SILVA MD 💖 SUCCESSFULLY VIEWED YOUR STATUS',
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
    THEME:                 (process.env.THEME || 'silva').toLowerCase().trim(),
    GREETING:              process.env.GREETING || '',
    APP_URL:               process.env.APP_URL || '',
};
