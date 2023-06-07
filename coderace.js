const plugin = ({ widgets, simulator, vehicle }) => {
    const sampleDiv1 = document.createElement("div")
    const sampleDiv2 = document.createElement("div")
    const sampleDiv3 = document.createElement("div")
    const sampleDiv4 = document.createElement("div")
    
    sampleDiv1.innerHTML = `
    <div style='font-size:20px;width:100%;height:100%;background-color:yellow;color:red;text-align:center;margin:auto;'>
        <div> Initial Speed: 4</div>
        <div> Initial X: 39</div>
        <div> Initial Y: 40</div>
        <div> Direction: Straight to East</div>
    </div>`
    
    sampleDiv2.innerHTML = `
    <div style='font-size:20px;width:100%;height:100%;background-color:yellow;color:red;text-align:center;margin:auto;'>
        <div> Initial Speed: 3.5</div>
        <div> Initial X: 49</div>
        <div> Initial Y: 52</div>
        <div> Direction: Turn left to East</div>
    </div>`
    
    sampleDiv3.innerHTML = `
    <div style='font-size:20px;width:100%;height:100%;background-color:yellow;color:red;text-align:center;margin:auto;'>
        <div> Initial Speed: 3.7</div>
        <div> Initial X: 51</div>
        <div> Initial Y: 48</div>
        <div> Direction: Straight to North</div>
    </div>`
    
    sampleDiv4.innerHTML = `
    <div style='font-size:20px;width:100%;height:100%;background-color:yellow;color:red;text-align:center;margin:auto;'>
        <div> Initial Speed: </div>
        <div> Initial X: 38</div>
        <div> Initial Y: 40</div>
        <div> Direction: Straight to East</div>
    </div>`

    widgets.register("Widget1", 
    (box) => {
        box.injectNode(sampleDiv1)
    })
    
    widgets.register("Widget2", 
    (box) => {
        box.injectNode(sampleDiv2)
    })
    
    widgets.register("Widget3", 
    (box) => {
        box.injectNode(sampleDiv3)
    })
    
    widgets.register("Widget4", 
    (box) => {
        box.injectNode(sampleDiv4)
    })
}

export default plugin;
