import { useState, useMemo } from 'react'

// Import background images
import bgAbstractBwWaves from './assets/images/bg-abstract-bw-waves.jpg'
import bgAbstractWaterGlass from './assets/images/bg-abstract-water-glass.jpg'
import bgAnimalTigerGrayscale from './assets/images/bg-animal-tiger-grayscale.jpg'
import bgArtPaintBw from './assets/images/bg-art-paint-bw.jpg'
import bgMacroFeatherWhite from './assets/images/bg-macro-feather-white.jpg'
import bgNatureLakeBw from './assets/images/bg-nature-lake-bw.jpg'
import bgNatureLandscape8k from './assets/images/bg-nature-landscape-8k.png'
import bgNatureSeashoreGrayscale from './assets/images/bg-nature-seashore-grayscale.jpg'
import bgNatureTreeBranchesAlt from './assets/images/bg-nature-tree-branches-alt.jpg'
import bgNatureTreeBranches from './assets/images/bg-nature-tree-branches.jpg'
import bgNatureTreeView from './assets/images/bg-nature-tree-view.jpg'
import bgSpaceSolarSystem from './assets/images/bg-space-solar-system.jpg'

const BACKGROUNDS = [
  { id: 'abstract-bw-waves', name: 'BW Waves', src: bgAbstractBwWaves, category: 'abstract' },
  { id: 'abstract-water-glass', name: 'Water Glass', src: bgAbstractWaterGlass, category: 'abstract' },
  { id: 'animal-tiger-grayscale', name: 'Tiger', src: bgAnimalTigerGrayscale, category: 'animal' },
  { id: 'art-paint-bw', name: 'Paint BW', src: bgArtPaintBw, category: 'art' },
  { id: 'macro-feather-white', name: 'Feather', src: bgMacroFeatherWhite, category: 'macro' },
  { id: 'nature-lake-bw', name: 'Lake BW', src: bgNatureLakeBw, category: 'nature' },
  { id: 'nature-landscape-8k', name: 'Landscape', src: bgNatureLandscape8k, category: 'nature' },
  { id: 'nature-seashore-grayscale', name: 'Seashore', src: bgNatureSeashoreGrayscale, category: 'nature' },
  { id: 'nature-tree-branches-alt', name: 'Tree Alt', src: bgNatureTreeBranchesAlt, category: 'nature' },
  { id: 'nature-tree-branches', name: 'Tree', src: bgNatureTreeBranches, category: 'nature' },
  { id: 'nature-tree-view', name: 'Tree View', src: bgNatureTreeView, category: 'nature' },
  { id: 'space-solar-system', name: 'Solar System', src: bgSpaceSolarSystem, category: 'space' },
]

const OVERLAY_COLORS = [
  { id: 'dark', name: 'Dark', color: 'rgba(0, 0, 0, 1)' },
  { id: 'light', name: 'Light', color: 'rgba(255, 255, 255, 1)' },
  { id: 'golden', name: 'Golden', color: 'rgba(242, 183, 61, 1)' },
  { id: 'blue', name: 'Blue', color: 'rgba(59, 130, 246, 1)' },
  { id: 'purple', name: 'Purple', color: 'rgba(139, 92, 246, 1)' },
  { id: 'green', name: 'Green', color: 'rgba(34, 197, 94, 1)' },
  { id: 'red', name: 'Red', color: 'rgba(239, 68, 68, 1)' },
  { id: 'cyan', name: 'Cyan', color: 'rgba(6, 182, 212, 1)' },
]

const SIZES = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl']

const GLASS_TYPES = [
  { id: 'blur', name: 'Glass Blur', prefix: 'glass-blur', description: 'Clear/neutral glass' },
  { id: 'dark', name: 'Glass Dark', prefix: 'glass-dark', description: 'Dark tinted glass' },
  { id: 'white', name: 'Glass White', prefix: 'glass-white', description: 'White tinted glass' },
  { id: 'golden', name: 'Glass Golden', prefix: 'glass-golden', description: 'Golden tinted glass' },
  { id: 'frosted', name: 'Glass Frosted', prefix: 'glass-frosted', description: 'Frosted glass with saturation' },
]

const GLASS_CARDS = [
  { name: 'glass-card', label: 'Standard Card' },
  { name: 'glass-card-golden', label: 'Golden Card' },
  { name: 'glass-card-dark', label: 'Dark Card' },
]

const GLASS_EFFECTS = [
  { name: 'glass-border', label: 'Border' },
  { name: 'glass-border-golden', label: 'Golden Border' },
  { name: 'glass-border-strong', label: 'Strong Border' },
  { name: 'glass-glow', label: 'Glow' },
  { name: 'glass-glow-golden', label: 'Golden Glow' },
  { name: 'glass-glow-sm', label: 'Small Glow' },
  { name: 'glass-glow-lg', label: 'Large Glow' },
  { name: 'glass-shadow', label: 'Shadow' },
  { name: 'glass-shadow-lg', label: 'Large Shadow' },
  { name: 'glass-animated', label: 'Animated Shimmer' },
]

function App() {
  const [activeSection, setActiveSection] = useState('all')

  // Background controls
  const [selectedBg, setSelectedBg] = useState(BACKGROUNDS[0])
  const [blur, setBlur] = useState(0)
  const [overlayOpacity, setOverlayOpacity] = useState(50)
  const [overlayColor, setOverlayColor] = useState(OVERLAY_COLORS[0])
  const [grayscale, setGrayscale] = useState(false)

  // Generate CSS code for current settings
  const generatedCSS = useMemo(() => {
    const lines = [
      '/* Background Container */',
      '.bg-container {',
      '  position: fixed;',
      '  inset: 0;',
      '  z-index: -1;',
      '}',
      '',
      '/* Background Image Layer */',
      '.bg-image {',
      `  background-image: url("${selectedBg.id}.jpg");`,
      '  background-size: cover;',
      '  background-position: center;',
      grayscale ? '  filter: grayscale(100%);' : null,
      '}',
      '',
      blur > 0 ? '/* Blur Layer */' : null,
      blur > 0 ? '.bg-blur {' : null,
      blur > 0 ? `  backdrop-filter: blur(${blur}px);` : null,
      blur > 0 ? '}' : null,
      blur > 0 ? '' : null,
      '/* Overlay Layer */',
      '.bg-overlay {',
      `  background: ${overlayColor.color};`,
      `  opacity: ${(overlayOpacity / 100).toFixed(2)};`,
      '}',
    ].filter(Boolean)

    return lines.join('\n')
  }, [selectedBg, blur, overlayOpacity, overlayColor, grayscale])

  return (
    <>
      {/* Background System */}
      <div className="bg-container">
        {/* Layer 1: Background Image */}
        <div
          className={`bg-image ${grayscale ? 'grayscale' : ''}`}
          style={{ backgroundImage: `url(${selectedBg.src})` }}
        />

        {/* Layer 2: Blur */}
        <div
          className="bg-blur"
          style={{ '--bg-blur': `${blur}px` }}
        />

        {/* Layer 3: Color Overlay */}
        <div
          className="bg-overlay"
          style={{
            '--bg-overlay-color': overlayColor.color,
            '--bg-overlay-opacity': overlayOpacity / 100
          }}
        />
      </div>

      {/* Content */}
      <div className="bg-content">
        <div className="p-6 max-w-7xl mx-auto">
          {/* Background Controls */}
          <div className="glass-card p-6 mb-8">
            <h1 className="text-3xl font-bold text-white mb-6">Glass Morphism UI</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Controls */}
              <div className="space-y-6">
                {/* Background Image Selection */}
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Background Image</label>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {BACKGROUNDS.map((bg) => (
                      <button
                        key={bg.id}
                        onClick={() => setSelectedBg(bg)}
                        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          selectedBg.id === bg.id
                            ? 'border-amber-400 ring-2 ring-amber-400/50'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                        title={bg.name}
                      >
                        <img
                          src={bg.src}
                          alt={bg.name}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grayscale Toggle */}
                <div className="flex items-center gap-3">
                  <label className="text-white/70 text-sm">Grayscale</label>
                  <button
                    onClick={() => setGrayscale(!grayscale)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      grayscale ? 'bg-amber-500' : 'bg-white/20'
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        grayscale ? 'left-7' : 'left-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Blur Slider */}
                <div>
                  <label className="text-white/70 text-sm mb-2 flex justify-between">
                    <span>Background Blur</span>
                    <span className="text-white/50">{blur}px</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={blur}
                    onChange={(e) => setBlur(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                {/* Overlay Opacity Slider */}
                <div>
                  <label className="text-white/70 text-sm mb-2 flex justify-between">
                    <span>Overlay Opacity</span>
                    <span className="text-white/50">{overlayOpacity}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={overlayOpacity}
                    onChange={(e) => setOverlayOpacity(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                {/* Overlay Color */}
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Overlay Color</label>
                  <div className="flex flex-wrap gap-2">
                    {OVERLAY_COLORS.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setOverlayColor(color)}
                        className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                          overlayColor.id === color.id
                            ? 'glass-button-golden text-white'
                            : 'glass-button text-white/70'
                        }`}
                      >
                        {color.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Generated CSS */}
              <div>
                <label className="text-white/70 text-sm mb-2 block">Generated CSS</label>
                <div className="glass-card-dark p-4 rounded-xl h-[calc(100%-2rem)] overflow-auto">
                  <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                    {generatedCSS}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Section Filter */}
          <div className="glass-card p-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {['all', 'glass-types', 'cards', 'buttons', 'effects', 'inputs'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all capitalize ${
                    activeSection === section
                      ? 'glass-button-golden text-white'
                      : 'glass-button text-white/70'
                  }`}
                >
                  {section === 'all' ? 'All' : section.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Glass Types Section */}
          {(activeSection === 'all' || activeSection === 'glass-types') && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Glass Types</h2>
              {GLASS_TYPES.map((type) => (
                <div key={type.id} className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-2">{type.name}</h3>
                  <p className="text-white/50 text-sm mb-3">{type.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {SIZES.map((size) => {
                      const className = `${type.prefix}-${size}`
                      return (
                        <div
                          key={className}
                          className={`${className} rounded-xl p-4 glass-border glass-hover`}
                        >
                          <p className="text-white font-medium text-sm">{size.toUpperCase()}</p>
                          <p className="text-white/40 text-xs font-mono mt-1">.{className}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Cards Section */}
          {(activeSection === 'all' || activeSection === 'cards') && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Glass Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {GLASS_CARDS.map((card) => (
                  <div key={card.name} className={`${card.name} p-6`}>
                    <h3 className="text-white font-semibold mb-2">{card.label}</h3>
                    <p className="text-white/60 text-sm mb-4">
                      Sample card with glassmorphism effect.
                    </p>
                    <p className="text-white/40 text-xs font-mono">.{card.name}</p>
                  </div>
                ))}
              </div>

              {/* Nested Cards Demo */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white mb-3">Nested Cards</h3>
                <div className="glass-card p-6">
                  <p className="text-white mb-4">Outer Card (.glass-card)</p>
                  <div className="glass-card-dark p-4 mb-4">
                    <p className="text-white/80">Nested Dark Card (.glass-card-dark)</p>
                  </div>
                  <div className="glass-card-golden p-4">
                    <p className="text-white/80">Nested Golden Card (.glass-card-golden)</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Buttons Section */}
          {(activeSection === 'all' || activeSection === 'buttons') && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Glass Buttons</h2>
              <div className="glass-card p-6">
                <div className="flex flex-wrap gap-4 mb-6">
                  <button className="glass-button px-6 py-3 rounded-xl text-white">
                    Standard Button
                  </button>
                  <button className="glass-button-golden px-6 py-3 rounded-xl text-white">
                    Golden Button
                  </button>
                </div>

                {/* Button Sizes */}
                <h3 className="text-lg font-semibold text-white mb-3">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <button className="glass-button px-3 py-1.5 rounded-lg text-sm text-white">Small</button>
                  <button className="glass-button px-4 py-2 rounded-xl text-white">Medium</button>
                  <button className="glass-button px-6 py-3 rounded-xl text-lg text-white">Large</button>
                </div>

                {/* Button with Icons */}
                <h3 className="text-lg font-semibold text-white mb-3">Buttons with Icons</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="glass-button-golden px-4 py-2 rounded-xl text-white flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Item
                  </button>
                  <button className="glass-button px-4 py-2 rounded-xl text-white flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Upload
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Effects Section */}
          {(activeSection === 'all' || activeSection === 'effects') && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Glass Effects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {GLASS_EFFECTS.map((effect) => (
                  <div
                    key={effect.name}
                    className={`glass-md ${effect.name} rounded-xl p-4`}
                  >
                    <p className="text-white font-medium">{effect.label}</p>
                    <p className="text-white/50 text-sm font-mono">.{effect.name}</p>
                  </div>
                ))}
              </div>

              {/* Combined Effects */}
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Combined Effects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="glass-lg glass-border glass-shadow rounded-xl p-4">
                  <p className="text-white font-medium">Glass + Border + Shadow</p>
                  <p className="text-white/50 text-xs font-mono">.glass-lg .glass-border .glass-shadow</p>
                </div>
                <div className="glass-golden glass-border-golden glass-glow-golden rounded-xl p-4">
                  <p className="text-white font-medium">Golden Combo</p>
                  <p className="text-white/50 text-xs font-mono">.glass-golden .glass-border-golden .glass-glow-golden</p>
                </div>
                <div className="glass-frost glass-border-strong glass-glow-lg rounded-xl p-4">
                  <p className="text-white font-medium">Frost + Strong Border + Large Glow</p>
                  <p className="text-white/50 text-xs font-mono">.glass-frost .glass-border-strong .glass-glow-lg</p>
                </div>
              </div>
            </section>
          )}

          {/* Inputs Section */}
          {(activeSection === 'all' || activeSection === 'inputs') && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Glass Inputs</h2>
              <div className="glass-card p-6 space-y-4">
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Standard Input</label>
                  <input
                    type="text"
                    placeholder="Type something..."
                    className="glass-input w-full px-4 py-3 rounded-xl text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label className="text-white/70 text-sm mb-2 block">Input with Golden Focus</label>
                  <input
                    type="text"
                    placeholder="Focus to see golden glow..."
                    className="glass-input w-full px-4 py-3 rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-amber-400/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Select Input</label>
                    <select className="glass-input w-full px-4 py-3 rounded-xl text-white bg-transparent">
                      <option value="" className="bg-gray-900">Select option...</option>
                      <option value="1" className="bg-gray-900">Option 1</option>
                      <option value="2" className="bg-gray-900">Option 2</option>
                      <option value="3" className="bg-gray-900">Option 3</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Number Input</label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="glass-input w-full px-4 py-3 rounded-xl text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/70 text-sm mb-2 block">Textarea</label>
                  <textarea
                    placeholder="Enter your message..."
                    rows={4}
                    className="glass-input w-full px-4 py-3 rounded-xl text-white placeholder:text-white/40 resize-none"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Full Component Demo */}
          {activeSection === 'all' && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Full Component Demo</h2>
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Payment Card</h3>
                    <p className="text-white/60">Complete glassmorphism form</p>
                  </div>
                  <div className="glass-golden-strong rounded-full w-12 h-12 flex items-center justify-center glass-glow-golden">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Amount</label>
                    <div className="glass-card-dark p-4 flex items-center gap-3">
                      <span className="text-amber-400 text-2xl font-bold">$</span>
                      <input
                        type="text"
                        defaultValue="1,500.00"
                        className="bg-transparent text-white text-2xl font-semibold outline-none flex-1"
                      />
                      <span className="text-white/50">USD</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card-dark p-4">
                      <p className="text-white/50 text-sm">From</p>
                      <p className="text-white font-medium">John Doe</p>
                    </div>
                    <div className="glass-card-dark p-4">
                      <p className="text-white/50 text-sm">To</p>
                      <p className="text-white font-medium">Jane Smith</p>
                    </div>
                  </div>

                  <button className="glass-button-golden w-full py-4 rounded-xl text-white font-semibold text-lg">
                    Confirm Payment
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* CSS Reference */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">CSS Class Reference</h2>
            <div className="glass-card-dark p-6 overflow-x-auto">
              <pre className="text-sm text-white/80 font-mono whitespace-pre-wrap">
{`/* Glass Types (sizes: 2xs, xs, sm, md, lg, xl) */
.glass-blur-{size}    /* Clear/neutral glass */
.glass-dark-{size}    /* Dark tinted glass */
.glass-white-{size}   /* White tinted glass */
.glass-golden-{size}  /* Golden tinted glass */
.glass-frosted-{size} /* Frosted glass with saturation */

/* Glass Components */
.glass-card, .glass-card-golden, .glass-card-dark
.glass-button, .glass-button-golden
.glass-input

/* Glass Effects */
.glass-border, .glass-border-golden, .glass-border-strong
.glass-glow, .glass-glow-golden, .glass-glow-sm, .glass-glow-lg
.glass-shadow, .glass-shadow-lg
.glass-animated

/* Background System */
.bg-container, .bg-image, .bg-blur, .bg-overlay, .bg-content
.bg-image.grayscale  /* CSS grayscale filter */

/* Utilities */
.glass-hover, .glass-hover-golden
.glass-transition, .glass-transition-fast`}
              </pre>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-white/60 text-sm pb-8">
            <p>Glass Morphism UI Template</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
