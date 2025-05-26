
normal = perturbNormalArb( - vViewPosition, normal, vec2(dFdx(vDisplacement), dFdy(vDisplacement)), faceDirection );

vec3 baseColor = vec3(0.2, 0.6, 0.9);
gl_FragColor = vec4(baseColor * (0.5 + 0.5 * vDisplacement), 1.0);
