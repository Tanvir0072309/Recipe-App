export function RecipeCTA({ onGetRecipe, loading }) {
    return (
        <section className="recipe-cta">
            <div className="recipe-cta-text">
                <h2>Ready For The Recipe?</h2>
                <p>Click on the button so you will get a very tasty recipe</p>
            </div>

            <div className="recipe-cta-btn">
                <button onClick={onGetRecipe} disabled={loading}>
                    {loading ? "Cooking..." : "Get Recipe"}
                </button>
            </div>
        </section>
    );
}
