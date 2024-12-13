document.addEventListener('DOMContentLoaded', () => {
    // Select the character element
    const character = document.querySelector('.character');
    const bench = document.querySelector('.bench');
    const container = document.querySelector('.container');

    // Animation setup with GSAP
    gsap.to(character, {
        duration: 3, // Animation duration in seconds
        x: "100%", // Move right across the screen
        y: "-100%", // Move up off the screen to simulate movement towards the bench
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Make the movement go back and forth
        ease: "power2.inOut" // Easing for a smooth start and end
    });

    gsap.to(character, {
        scale: 1.5, // Increase the size for muscle gain effect
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });

    gsap.to(bench, {
        duration: 2,
        opacity: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });

    gsap.to(container, {
        duration: 1,
        backgroundColor: "#f4f4f4", // Change background color to indicate interaction
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });
});
