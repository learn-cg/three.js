var gl;

function initialiseGL(canvas) {
    gl = canvas.getContext("webgl");
    gl.viewport(0, 0, canvas.width, canvas.height);
}

function initialiseBuffer() {
    var vertexData = [-0.4, -0.4, 0.0,   0.4, -0.4, 0.0,   0.0, 0.4, 0.0];  
    gl.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
}

function initialiseShaders() {
    var fragmentShaderSource = 'void main(void) \
	{ gl_FragColor = vec4(1.0, 1.0, 0.66, 1.0); }';
    gl.fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(gl.fragShader, fragmentShaderSource);
    gl.compileShader(gl.fragShader); 
    // Vertex shader code
    var vertexShaderSource = '\
	attribute highp vec4 myVertex; \
	uniform mediump mat4 transformationMatrix; \
	void main(void)  \
	{ gl_Position = transformationMatrix * myVertex; }';
    gl.vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(gl.vertexShader, vertexShaderSource);
    gl.compileShader(gl.vertexShader);
    gl.programObject = gl.createProgram();
    gl.attachShader(gl.programObject, gl.fragShader);
    gl.attachShader(gl.programObject, gl.vertexShader);
    gl.bindAttribLocation(gl.programObject, 0, "myVertex");
    gl.linkProgram(gl.programObject);
    gl.useProgram(gl.programObject);
}

function renderScene() {
    gl.clearColor(0.6, 0.8, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    var matrixLocation = 
           gl.getUniformLocation(gl.programObject, "transformationMatrix");
    var transformationMatrix = [
        1.0, 0.0, 0.0, 0.0,    0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,    0.0, 0.0, 0.0, 1.0  ];
    gl.uniformMatrix4fv(matrixLocation, gl.FALSE, transformationMatrix);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, gl.FALSE, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    return;
}

function main() {
    var canvas = document.getElementById("helloapicanvas");
    initialiseGL(canvas);
    initialiseBuffer();
    initialiseShaders();
    (function renderLoop() {
        if (renderScene()) {
            window.requestAnimationFrame(renderLoop);
        }
    })();
}
