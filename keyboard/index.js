let space = document.getElementById("space")
let inp = document.getElementById("inp")

function disp(n1) {
    doc.inp.value = doc.inp.value + n1;
    space.onclick = (() => {
        doc.inp.value += " "
    })
}

let a = document.getElementById("a"),
    b = document.getElementById("b"),
    c = document.getElementById("c"),
    d = document.getElementById("d"),
    e = document.getElementById("e"),
    f = document.getElementById("f"),
    g = document.getElementById("g"),
    h = document.getElementById("h"),
    i = document.getElementById("i"),
    j = document.getElementById("j"),
    k = document.getElementById("k"),
    l = document.getElementById("l"),
    m = document.getElementById("m"),
    n = document.getElementById("n"),
    o = document.getElementById("o"),
    p = document.getElementById("p"),
    q = document.getElementById("q"),
    r = document.getElementById("r"),
    s = document.getElementById("s"),
    t = document.getElementById("t"),
    u = document.getElementById("u"),
    v = document.getElementById("v"),
    w = document.getElementById("w"),
    x = document.getElementById("x"),
    y = document.getElementById("y"),
    z = document.getElementById("z")

var alpha = [a.value, b.value, c.value, d.value, e.value, f.value, g.value, h.value, i.value, j.value, k.value, l.value, m.value, n.value, o.value, p.value, q.value, r.value, s.value, t.value, u.value, v.value, w.value, x.value, y.value, z.value]

yeno = alpha.toString()


function caps() {
    if (q.value != "q") {

        xeno = yeno.toLowerCase()
        a.value = xeno[0]
        b.value = xeno[2]
        c.value = xeno[4]
        d.value = xeno[6]
        e.value = xeno[8]
        f.value = xeno[10]
        g.value = xeno[12]
        h.value = xeno[14]
        i.value = xeno[16]
        j.value = xeno[18]
        k.value = xeno[20]
        l.value = xeno[22]
        m.value = xeno[24]
        n.value = xeno[26]
        o.value = xeno[28]
        p.value = xeno[30]
        q.value = xeno[32]
        r.value = xeno[34]
        s.value = xeno[36]
        t.value = xeno[38]
        u.value = xeno[40]
        v.value = xeno[42]
        w.value = xeno[44]
        x.value = xeno[46]
        y.value = xeno[48]
        z.value = xeno[50]

    } else {

        xeno = yeno.toUpperCase()
        a.value = xeno[0]
        b.value = xeno[2]
        c.value = xeno[4]
        d.value = xeno[6]
        e.value = xeno[8]
        f.value = xeno[10]
        g.value = xeno[12]
        h.value = xeno[14]
        i.value = xeno[16]
        j.value = xeno[18]
        k.value = xeno[20]
        l.value = xeno[22]
        m.value = xeno[24]
        n.value = xeno[26]
        o.value = xeno[28]
        p.value = xeno[30]
        q.value = xeno[32]
        r.value = xeno[34]
        s.value = xeno[36]
        t.value = xeno[38]
        u.value = xeno[40]
        v.value = xeno[42]
        w.value = xeno[44]
        x.value = xeno[46]
        y.value = xeno[48]
        z.value = xeno[50]

    }
}

var zeo = [, , , , , , , , , , , , , , , , , , , ];


function emotes() {
    a.value = String.fromCodePoint(0x1F636)
    b.value = String.fromCodePoint(0x1F62C)
    c.value = String.fromCodePoint(0x1F97A)
    d.value = String.fromCodePoint(0x1F614)
    e.value = String.fromCodePoint(0x1F602)
    f.value = String.fromCodePoint(0x1F60B)
    g.value = String.fromCodePoint(0x1F92A)
    h.value = String.fromCodePoint(0x1F914)
    i.value = String.fromCodePoint(0x1F917)
    j.value = String.fromCodePoint(0x1F9D0)
    k.value = String.fromCodePoint(0x1F644)
    l.value = String.fromCodePoint(0x1F620)
    m.value = String.fromCodePoint(0x1F929)
    n.value = String.fromCodePoint(0x1F92B)
    o.value = String.fromCodePoint(0x1F60A)
    p.value = String.fromCodePoint(0x1F92D)
    q.value = String.fromCodePoint(0x1F603)
    r.value = String.fromCodePoint(0x1F618)
    s.value = String.fromCodePoint(0x1F611)
    t.value = String.fromCodePoint(0x1F618)
    u.value = String.fromCodePoint(0x1F973)
    v.value = String.fromCodePoint(0x1F615)
    w.value = String.fromCodePoint(0x1F606)
    x.value = String.fromCodePoint(0x2639)
    y.value = String.fromCodePoint(0x1F60D)
    z.value = String.fromCodePoint(0x1F624)
}