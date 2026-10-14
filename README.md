# T05: D3 Multi-Chart Dashboard

A responsive multi-chart data visualisation dashboard built with **D3.js (v7)** for the **COS30045 Data Visualisation** unit at Swinburne University of Technology.

* **Live Demo:** [Insert your Vercel link here after Step 4]
* **Author:** Allen
* **Unit:** COS30045 Data Visualisation

---

## Visualisations Implemented

1. **Scatter Plot (`js/scatter.js`):**
   * **Data:** `data/Ex5_TV_energy.csv`
   * **Attributes:** Star Rating (X-axis) vs. Energy Consumption in kWh (Y-axis).
   * **Insight:** Displays the distribution of television models and the general trend between energy efficiency ratings and overall energy usage.

2. **Line Chart (`js/line.js`):**
   * **Data:** `data/Ex5_ARE_Spot_Prices.csv`
   * **Attributes:** Year from 1998 to 2024 (X-axis) vs. Average Spot Price in $/MWh (Y-axis).
   * **Insight:** Tracks the long-term historical trend of wholesale electricity prices across Australia.

3. **Bar Chart (`js/bar.js`):**
   * **Data:** `data/Ex5_TV_energy_55inchtv_byScreenType.csv`
   * **Attributes:** Screen Technology (X-axis) vs. Mean Energy Consumption in kWh/year (Y-axis).
   * **Insight:** Compares energy consumption specifically for 55-inch models across LCD, LED, and OLED screen technologies.

4. **Donut Chart (`js/donut.js`):**
   * **Data:** `data/Ex5_TV_energy_Allsizes_byScreenType.csv`
   * **Attributes:** Proportional breakdown of mean energy consumption across LCD, LED, and OLED for all television sizes combined.

---

## Technical Features
* **Modular JavaScript:** Each chart is constructed within its own independent script file.
* **Responsive Layout:** Each SVG utilizes `viewBox` and responsive containers to adapt seamlessly to different viewport sizes.
* **Scales & Axes:** Implemented using `d3.scaleLinear`, `d3.scaleBand`, `d3.arc`, and `d3.pie`.