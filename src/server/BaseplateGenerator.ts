const BASEPLATE_SIZE = new Vector3(512, 4, 512);
const BASEPLATE_POSITION = new Vector3(0, -2, 0);
const BASEPLATE_COLOR = new Color3(0.35, 0.65, 0.35);

/**
 * Creates a basic grass baseplate in the workspace
 */
export function createBaseplate(): Part {
    const baseplate = new Instance("Part");
    baseplate.Name = "Baseplate";
    baseplate.Anchored = true;
    baseplate.Material = Enum.Material.Grass;
    baseplate.Size = BASEPLATE_SIZE;
    baseplate.Position = BASEPLATE_POSITION;
    baseplate.Color = BASEPLATE_COLOR;
    baseplate.TopSurface = Enum.SurfaceType.Smooth;
    baseplate.BottomSurface = Enum.SurfaceType.Smooth;

    baseplate.Parent = game.Workspace;

    print(`[BaseplateGenerator] Created baseplate`);
    return baseplate;
}
