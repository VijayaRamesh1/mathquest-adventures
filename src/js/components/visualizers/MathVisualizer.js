import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MathVisualizer = ({ visualization }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Set up the Three.js scene
    const width = canvasRef.current.clientWidth;
    const height = 400; // Fixed height for the visualization
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setClearColor(0xf0f2f5);
    
    // Position the camera
    camera.position.z = 5;
    
    // Create different visualizations based on the type
    if (visualization.type === 'limitGraph') {
      createLimitVisualization(scene, visualization);
    } else if (visualization.type === 'continuityGraph') {
      createContinuityVisualization(scene, visualization);
    } else if (visualization.type === 'derivativeGraph') {
      createDerivativeVisualization(scene, visualization);
    } else if (visualization.type === 'integralGraph') {
      createIntegralVisualization(scene, visualization);
    }
    
    // Add axes
    addAxes(scene);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      renderer.dispose();
      while(scene.children.length > 0) { 
        scene.remove(scene.children[0]); 
      }
    };
  }, [visualization]);
  
  // Function to create a limit visualization
  const createLimitVisualization = (scene, visualization) => {
    const { function: func, point } = visualization;
    
    // Create a function graph
    const graphMaterial = new THREE.LineBasicMaterial({ color: 0x4267b2 });
    const graphGeometry = new THREE.BufferGeometry();
    
    const points = [];
    for (let x = -5; x <= 5; x += 0.1) {
      // Evaluate the function using a safe method
      let y;
      try {
        // Use Function constructor to evaluate the function string
        const fn = new Function('x', `return ${func.toString().replace('x =>', 'return ')}`);
        y = fn(x);
      } catch (error) {
        // Default to a straight line if function evaluation fails
        y = x;
      }
      
      // Skip points that would make the graph go out of view
      if (y > 10 || y < -10) continue;
      
      points.push(new THREE.Vector3(x, y, 0));
    }
    
    graphGeometry.setFromPoints(points);
    const graph = new THREE.Line(graphGeometry, graphMaterial);
    scene.add(graph);
    
    // Add a point at the limit point
    const pointGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
    
    // Position the point at the function value at the limit point
    try {
      const fn = new Function('x', `return ${func.toString().replace('x =>', 'return ')}`);
      const y = fn(point);
      pointMesh.position.set(point, y, 0);
      scene.add(pointMesh);
    } catch (error) {
      console.error("Error positioning limit point:", error);
    }
  };
  
  // Function to create a continuity visualization
  const createContinuityVisualization = (scene, visualization) => {
    const { functions, points } = visualization;
    
    // Create graphs for each function
    functions.forEach((func, index) => {
      const graphMaterial = new THREE.LineBasicMaterial({ 
        color: index === 0 ? 0x4267b2 : 0x28a745 
      });
      const graphGeometry = new THREE.BufferGeometry();
      
      const graphPoints = [];
      for (let x = -5; x <= 5; x += 0.1) {
        // Skip the discontinuity point
        if (points.includes(Math.round(x * 10) / 10)) continue;
        
        // Evaluate the function
        let y;
        try {
          const fn = new Function('x', `return ${func.toString().replace('x =>', 'return ')}`);
          y = fn(x);
        } catch (error) {
          y = x;
        }
        
        if (y > 10 || y < -10) continue;
        graphPoints.push(new THREE.Vector3(x, y, 0));
      }
      
      graphGeometry.setFromPoints(graphPoints);
      const graph = new THREE.Line(graphGeometry, graphMaterial);
      scene.add(graph);
    });
    
    // Add markers for discontinuity points
    points.forEach(point => {
      const pointGeometry = new THREE.SphereGeometry(0.1, 32, 32);
      const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
      
      // For each function, try to calculate its limit at the point
      functions.forEach((func, index) => {
        try {
          // Calculate left and right limits
          const leftX = point - 0.01;
          const rightX = point + 0.01;
          
          const fn = new Function('x', `return ${func.toString().replace('x =>', 'return ')}`);
          
          const leftY = fn(leftX);
          const rightY = fn(rightX);
          
          // Create points for left and right limits
          if (index === 0) { // Only show for the first function to avoid clutter
            const leftPointMesh = pointMesh.clone();
            leftPointMesh.position.set(point, leftY, 0);
            scene.add(leftPointMesh);
            
            const rightPointMesh = pointMesh.clone();
            rightPointMesh.position.set(point, rightY, 0);
            scene.add(rightPointMesh);
          }
        } catch (error) {
          console.error("Error calculating limits:", error);
        }
      });
    });
  };
  
  // Function to create a derivative visualization
  const createDerivativeVisualization = (scene, visualization) => {
    const { function: func, derivative, point } = visualization;
    
    // Draw the original function
    const funcMaterial = new THREE.LineBasicMaterial({ color: 0x4267b2 });
    const funcGeometry = new THREE.BufferGeometry();
    
    const funcPoints = [];
    for (let x = -5; x <= 5; x += 0.1) {
      let y;
      try {
        const fn = new Function('x', `return ${func.toString().replace('x =>', 'return ')}`);
        y = fn(x);
      } catch (error) {
        y = x;
      }
      
      if (y > 10 || y < -10) continue;
      funcPoints.push(new THREE.Vector3(x, y, 0));
    }
    
    funcGeometry.setFromPoints(funcPoints);
    const funcGraph = new THREE.Line(funcGeometry, funcMaterial);
    scene.add(funcGraph);
    
    // Draw the derivative function
    const derivMaterial = new THREE.LineBasicMaterial({ color: 0x28a745 });
    const derivGeometry = new THREE.BufferGeometry();
    
    const derivPoints = [];
    for (let x = -5; x <= 5; x += 0.1) {
      let y;
      try {
        const fn = new Function('x', `return ${derivative.toString().replace('x =>', 'return ')}`);
        y = fn(x);
      } catch (error) {
        y = 0;
      }
      
      if (y > 10 || y < -10) continue;
      derivPoints.push(new THREE.Vector3(x, y, 0));
    }
    
    derivGeometry.setFromPoints(derivPoints);
    const derivGraph = new THREE.Line(derivGeometry, derivMaterial);
    scene.add(derivGraph);
    
    // Draw tangent line at the specified point
    if (point !== undefined) {
      try {
        const fn = new Function('x', `return ${func.toString().replace('x =>', 'return ')}`);
        const dfn = new Function('x', `return ${derivative.toString().replace('x =>', 'return ')}`);
        
        const y = fn(point);
        const slope = dfn(point);
        
        // Create tangent line
        const tangentMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
        const tangentGeometry = new THREE.BufferGeometry();
        
        // Calculate points for tangent line: y - y0 = m(x - x0)
        const x1 = point - 2;
        const y1 = y - slope * 2;
        const x2 = point + 2;
        const y2 = y + slope * 2;
        
        tangentGeometry.setFromPoints([
          new THREE.Vector3(x1, y1, 0),
          new THREE.Vector3(x2, y2, 0)
        ]);
        
        const tangent = new THREE.Line(tangentGeometry, tangentMaterial);
        scene.add(tangent);
        
        // Add a point at the tangent point
        const pointGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
        pointMesh.position.set(point, y, 0);
        scene.add(pointMesh);
      } catch (error) {
        console.error("Error creating tangent line:", error);
      }
    }
  };
  
  // Function to create an integral visualization
  const createIntegralVisualization = (scene, visualization) => {
    const { function: func, lowerBound, upperBound } = visualization;
    
    // Draw the function
    const funcMaterial = new THREE.LineBasicMaterial({ color: 0x4267b2 });
    const funcGeometry = new THREE.BufferGeometry();
    
    const funcPoints = [];
    for (let x = -5; x <= 5; x += 0.1) {
      let y;
      try {
        const fn = new Function('x', `return ${func.toString().replace('x =>', 'return ')}`);
        y = fn(x);
      } catch (error) {
        y = x;
      }
      
      if (y > 10 || y < -10) continue;
      funcPoints.push(new THREE.Vector3(x, y, 0));
    }
    
    funcGeometry.setFromPoints(funcPoints);
    const funcGraph = new THREE.Line(funcGeometry, funcMaterial);
    scene.add(funcGraph);
    
    // Create the shaded area for the integral
    if (lowerBound !== undefined && upperBound !== undefined) {
      try {
        const areaShape = new THREE.Shape();
        const fn = new Function('x', `return ${func.toString().replace('x =>', 'return ')}`);
        
        // Start at the lower bound on the x-axis
        areaShape.moveTo(lowerBound, 0);
        
        // Add points along the function
        for (let x = lowerBound; x <= upperBound; x += 0.1) {
          const y = fn(x);
          areaShape.lineTo(x, y);
        }
        
        // Close the shape back to the x-axis
        areaShape.lineTo(upperBound, 0);
        areaShape.lineTo(lowerBound, 0);
        
        const areaGeometry = new THREE.ShapeGeometry(areaShape);
        const areaMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x28a745, 
          transparent: true, 
          opacity: 0.5 
        });
        
        const areaMesh = new THREE.Mesh(areaGeometry, areaMaterial);
        scene.add(areaMesh);
        
        // Add vertical lines at bounds
        const boundMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
        
        // Lower bound
        const lowerBoundGeometry = new THREE.BufferGeometry();
        lowerBoundGeometry.setFromPoints([
          new THREE.Vector3(lowerBound, 0, 0),
          new THREE.Vector3(lowerBound, fn(lowerBound), 0)
        ]);
        const lowerBoundLine = new THREE.Line(lowerBoundGeometry, boundMaterial);
        scene.add(lowerBoundLine);
        
        // Upper bound
        const upperBoundGeometry = new THREE.BufferGeometry();
        upperBoundGeometry.setFromPoints([
          new THREE.Vector3(upperBound, 0, 0),
          new THREE.Vector3(upperBound, fn(upperBound), 0)
        ]);
        const upperBoundLine = new THREE.Line(upperBoundGeometry, boundMaterial);
        scene.add(upperBoundLine);
      } catch (error) {
        console.error("Error creating integral area:", error);
      }
    }
  };
  
  // Helper function to add axes to the scene
  const addAxes = (scene) => {
    // X-axis
    const xAxisMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const xAxisGeometry = new THREE.BufferGeometry();
    xAxisGeometry.setFromPoints([
      new THREE.Vector3(-5, 0, 0),
      new THREE.Vector3(5, 0, 0)
    ]);
    const xAxis = new THREE.Line(xAxisGeometry, xAxisMaterial);
    scene.add(xAxis);
    
    // Y-axis
    const yAxisMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const yAxisGeometry = new THREE.BufferGeometry();
    yAxisGeometry.setFromPoints([
      new THREE.Vector3(0, -5, 0),
      new THREE.Vector3(0, 5, 0)
    ]);
    const yAxis = new THREE.Line(yAxisGeometry, yAxisMaterial);
    scene.add(yAxis);
  };
  
  return (
    <div className="math-visualizer">
      <canvas ref={canvasRef} width="800" height="400" />
    </div>
  );
};

export default MathVisualizer;
