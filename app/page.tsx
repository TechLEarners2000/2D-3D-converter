"use client"

import { useState, useEffect } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ImageUploader from "@/components/image-uploader"
import ModelViewer from "@/components/model-viewer"
import ProcessingStatus from "@/components/processing-status"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [image, setImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [modelReady, setModelReady] = useState(false)
  const [processingStep, setProcessingStep] = useState<string>("")
  const [buildingParams, setBuildingParams] = useState({
    length: 20,
    width: 15,
    height: 10,
    floors: 2,
    staircases: 2,
    entryPoints: 2,
    buildingType: "residential",
    additionalNotes: ""
  })

  useEffect(() => {
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.hasAttribute('data-page')) {
        e.preventDefault()
        setCurrentPage(target.getAttribute('data-page')!)
      }
    }

    document.addEventListener('click', handleNavClick)
    return () => document.removeEventListener('click', handleNavClick)
  }, [])

  const handleImageUpload = (imageDataUrl: string) => {
    setImage(imageDataUrl)
    setModelReady(false)
  }

  const convertTo3D = async () => {
    if (!image) return

    setIsProcessing(true)
    setModelReady(false)

    // Simulate the processing steps that would happen on the backend
    setProcessingStep("Analyzing image structure...")
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setProcessingStep("Generating depth map...")
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setProcessingStep("Running 3D reconstruction model...")
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setProcessingStep("Creating 3D mesh...")
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setProcessingStep("Applying textures...")
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsProcessing(false)
    setModelReady(true)
  }

  const renderDashboard = () => (
    <section id="dashboard" className="page active">
      <div className="container">
        <div className="dashboard-header">
          <h1>Project Dashboard</h1>
          <p>Welcome to Blueprint3D - Transform your 2D blueprints into immersive 3D models</p>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <div className="card-icon">📐</div>
            <h3>Automatic Conversion</h3>
            <p>Transform 2D blueprints into 3D models with minimal user supervision using our advanced algorithms.</p>
          </div>

          <div className="card">
            <div className="card-icon">⚙️</div>
            <h3>Parameter Input Support</h3>
            <p>Specify dimensions, staircases, entry/exit points, and other custom details for precise modeling.</p>
          </div>

          <div className="card">
            <div className="card-icon">🚶</div>
            <h3>3D Walkthrough Simulations</h3>
            <p>Experience full navigation and immersive visualization of your architectural designs.</p>
          </div>

          <div className="card">
            <div className="card-icon">📡</div>
            <h3>Offline Functionality</h3>
            <p>Works without internet once installed, ensuring uninterrupted workflow in any environment.</p>
          </div>

          <div className="card">
            <div className="card-icon">🛰️</div>
            <h3>Satellite & Map Integration</h3>
            <p>Enhance realism with satellite imagery and offline Google Maps integration.</p>
          </div>

          <div className="card">
            <div className="card-icon">📤</div>
            <h3>Export Options</h3>
            <p>Export models in standard formats (OBJ, FBX, etc.) for reuse in other applications.</p>
          </div>
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <button className="btn btn-primary" onClick={() => setCurrentPage('upload')}>Get Started - Upload Blueprint</button>
        </div>
      </div>
    </section>
  )

  const renderUpload = () => (
    <section id="upload" className="page active">
      <div className="container">
        <h1>Upload Your Blueprint</h1>
        <p>Upload a 2D architectural blueprint to begin the conversion process</p>

        <div className="upload-area">
          <i>📄</i>
          <h3>Drag & Drop Your Blueprint Here</h3>
          <p>Supported formats: JPG, PNG, PDF, DWG, DXF</p>
          <input type="file" id="blueprintFile" style={{ display: "none" }} accept=".jpg,.jpeg,.png,.pdf,.dwg,.dxf" />
          <button className="btn btn-primary" onClick={() => document.getElementById('blueprintFile')?.click()}>Browse Files</button>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="btn btn-primary" onClick={() => setCurrentPage('parameters')}>Continue to Parameters</button>
        </div>
      </div>
    </section>
  )

  const renderParameters = () => (
    <section id="parameters" className="page active">
      <div className="container">
        <h1>Define Building Parameters</h1>
        <p>Specify dimensions and features for accurate 3D conversion</p>

        <div className="parameter-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="buildingLength">Length (meters)</label>
              <input
                type="number"
                id="buildingLength"
                className="form-control"
                min="1"
                value={buildingParams.length}
                onChange={(e) => setBuildingParams({...buildingParams, length: parseInt(e.target.value)})}
              />
            </div>
            <div className="form-group">
              <label htmlFor="buildingWidth">Width (meters)</label>
              <input
                type="number"
                id="buildingWidth"
                className="form-control"
                min="1"
                value={buildingParams.width}
                onChange={(e) => setBuildingParams({...buildingParams, width: parseInt(e.target.value)})}
              />
            </div>
            <div className="form-group">
              <label htmlFor="buildingHeight">Height (meters)</label>
              <input
                type="number"
                id="buildingHeight"
                className="form-control"
                min="1"
                value={buildingParams.height}
                onChange={(e) => setBuildingParams({...buildingParams, height: parseInt(e.target.value)})}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="floors">Number of Floors</label>
              <input
                type="number"
                id="floors"
                className="form-control"
                min="1"
                value={buildingParams.floors}
                onChange={(e) => setBuildingParams({...buildingParams, floors: parseInt(e.target.value)})}
              />
            </div>
            <div className="form-group">
              <label htmlFor="staircases">Staircases</label>
              <select
                id="staircases"
                className="form-control"
                value={buildingParams.staircases}
                onChange={(e) => setBuildingParams({...buildingParams, staircases: parseInt(e.target.value)})}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="entryPoints">Entry Points</label>
              <select
                id="entryPoints"
                className="form-control"
                value={buildingParams.entryPoints}
                onChange={(e) => setBuildingParams({...buildingParams, entryPoints: parseInt(e.target.value)})}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="buildingType">Building Type</label>
            <select
              id="buildingType"
              className="form-control"
              value={buildingParams.buildingType}
              onChange={(e) => setBuildingParams({...buildingParams, buildingType: e.target.value})}
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
              <option value="institutional">Institutional</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="additionalNotes">Additional Notes</label>
            <textarea
              id="additionalNotes"
              className="form-control"
              rows={4}
              placeholder="Any specific requirements or features..."
              value={buildingParams.additionalNotes}
              onChange={(e) => setBuildingParams({...buildingParams, additionalNotes: e.target.value})}
            ></textarea>
          </div>

          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <button className="btn btn-primary" onClick={() => setCurrentPage('output')}>Generate 3D Model</button>
          </div>
        </div>
      </div>
    </section>
  )

  const renderOutput = () => (
    <section id="output" className="page active">
      <div className="container">
        <h1>3D Model Output</h1>
        <p>Your generated 3D model based on the blueprint and parameters</p>

        <div className="output-container">
          <div className="output-preview">
            {isProcessing ? (
              <ProcessingStatus step={processingStep} />
            ) : modelReady ? (
              <div style={{ width: "100%", height: "100%" }}>
                <ModelViewer imageUrl={image} />
              </div>
            ) : (
              <div style={{ textAlign: "center", color: "#666" }}>
                <i style={{ fontSize: "4rem" }}>🏗️</i>
                <h3>3D Model Preview</h3>
                <p>Your building model will appear here</p>
              </div>
            )}
          </div>

          <div className="output-controls">
            <h3>Model Controls</h3>
            <div className="form-group">
              <label htmlFor="viewAngle">View Angle</label>
              <input type="range" id="viewAngle" className="form-control" min="0" max="360" defaultValue="45" />
            </div>

            <div className="form-group">
              <label htmlFor="zoomLevel">Zoom Level</label>
              <input type="range" id="zoomLevel" className="form-control" min="1" max="100" defaultValue="50" />
            </div>

            <div className="form-group">
              <label htmlFor="renderQuality">Render Quality</label>
              <select id="renderQuality" className="form-control">
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
                <option value="ultra">Ultra</option>
              </select>
            </div>

            <div className="form-group">
              <label>Display Options</label>
              <div>
                <input type="checkbox" id="showWalls" defaultChecked />
                <label htmlFor="showWalls">Walls</label>
              </div>
              <div>
                <input type="checkbox" id="showFloors" defaultChecked />
                <label htmlFor="showFloors">Floors</label>
              </div>
              <div>
                <input type="checkbox" id="showStairs" defaultChecked />
                <label htmlFor="showStairs">Stairs</label>
              </div>
              <div>
                <input type="checkbox" id="showDoors" defaultChecked />
                <label htmlFor="showDoors">Doors/Windows</label>
              </div>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <button className="btn btn-primary" style={{ width: "100%" }} onClick={() => setCurrentPage('walkthrough')}>Start Walkthrough</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const renderWalkthrough = () => (
    <section id="walkthrough" className="page active">
      <div className="container">
        <h1>Interactive 3D Walkthrough</h1>
        <p>Experience your building design in an immersive 3D environment</p>

        <div className="walkthrough-container">
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white" }}>
            <i style={{ fontSize: "4rem" }}>🏢</i>
            <h3>3D Walkthrough Environment</h3>
            <p>Use the controls below to navigate through your building</p>
          </div>

          <div className="walkthrough-controls">
            <button className="btn btn-primary">Move Forward</button>
            <button className="btn btn-primary">Turn Left</button>
            <button className="btn btn-primary">Turn Right</button>
            <button className="btn btn-primary">Move Backward</button>
          </div>
        </div>

        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "space-between" }}>
          <button className="btn btn-outline" onClick={() => setCurrentPage('output')}>Back to Model</button>
          <button className="btn btn-primary">Export Model</button>
        </div>
      </div>
    </section>
  )

  return (
    <main>
      {currentPage === "dashboard" && renderDashboard()}
      {currentPage === "upload" && renderUpload()}
      {currentPage === "parameters" && renderParameters()}
      {currentPage === "output" && renderOutput()}
      {currentPage === "walkthrough" && renderWalkthrough()}
    </main>
  )
}
