# Example: Figma to React Component Workflow

This example demonstrates the complete workflow for converting a Figma design into a production-ready React component with design tokens and accessibility.

## Overview

This workflow covers:

- Extracting design tokens from Figma
- Converting Figma components to React
- Maintaining design-code consistency
- Implementing accessibility features
- Creating reusable component patterns

## Figma Design Analysis

### Original Figma Design Specifications

**Component**: Product Card

- **Dimensions**: 320px × 400px
- **Border Radius**: 12px
- **Shadow**: 0px 4px 12px rgba(0, 0, 0, 0.08)
- **Padding**: 16px
- **Gap between elements**: 12px

**Typography**:

- Product Title: Inter Semi-Bold, 18px, #1a1a1a
- Price: Inter Bold, 24px, #2563eb
- Description: Inter Regular, 14px, #6b7280
- Button Text: Inter Medium, 16px, #ffffff

**Colors**:

- Primary: #2563eb
- Text Primary: #1a1a1a
- Text Secondary: #6b7280
- Background: #ffffff
- Border: #e5e7eb

**Spacing Scale**:

- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px

## Step 1: Extract Design Tokens

```typescript
// design-tokens.ts
export const colors = {
  primary: {
    500: "#2563eb",
    600: "#1d4ed8",
    700: "#1e40af",
  },
  text: {
    primary: "#1a1a1a",
    secondary: "#6b7280",
    inverse: "#ffffff",
  },
  background: {
    primary: "#ffffff",
    secondary: "#f9fafb",
  },
  border: {
    default: "#e5e7eb",
    focus: "#2563eb",
  },
  state: {
    hover: "rgba(37, 99, 235, 0.1)",
    active: "rgba(37, 99, 235, 0.2)",
  },
};

export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "0.75rem", // 12px
  lg: "1rem", // 16px
  xl: "1.5rem", // 24px
  "2xl": "2rem", // 32px
};

export const typography = {
  fontFamily: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  fontSize: {
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.5rem", // 24px
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const borderRadius = {
  sm: "0.25rem", // 4px
  md: "0.5rem", // 8px
  lg: "0.75rem", // 12px
  xl: "1rem", // 16px
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 4px 12px 0 rgba(0, 0, 0, 0.08)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
};
```

## Step 2: Create Type Definitions

```typescript
// types.ts
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  imageAlt: string;
  inStock: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onViewDetails?: (productId: string) => void;
  className?: string;
}
```

## Step 3: Implement React Component

```tsx
// ProductCard.tsx
import React from "react";
import { Product, ProductCardProps } from "./types";
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} from "./design-tokens";

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails,
  className = "",
}) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product.id);
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(product.id);
    }
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  return (
    <article
      className={`product-card ${className}`}
      style={{
        width: "320px",
        backgroundColor: colors.background.primary,
        borderRadius: borderRadius.lg,
        boxShadow: shadows.lg,
        padding: spacing.lg,
        display: "flex",
        flexDirection: "column",
        gap: spacing.md,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = shadows.xl;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = shadows.lg;
      }}
    >
      {/* Product Image */}
      <div
        style={{
          width: "100%",
          height: "200px",
          borderRadius: borderRadius.md,
          overflow: "hidden",
          backgroundColor: colors.background.secondary,
        }}
      >
        <img
          src={product.imageUrl}
          alt={product.imageAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div
        style={{ display: "flex", flexDirection: "column", gap: spacing.sm }}
      >
        {/* Title */}
        <h3
          style={{
            fontFamily: typography.fontFamily.sans,
            fontSize: typography.fontSize.lg,
            fontWeight: typography.fontWeight.semibold,
            color: colors.text.primary,
            lineHeight: typography.lineHeight.tight,
            margin: 0,
          }}
        >
          {product.title}
        </h3>

        {/* Rating (if available) */}
        {product.rating && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: spacing.xs,
            }}
            role="img"
            aria-label={`Rated ${product.rating} out of 5 stars`}
          >
            <span
              style={{ color: "#fbbf24", fontSize: typography.fontSize.sm }}
            >
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </span>
            {product.reviewCount && (
              <span
                style={{
                  fontSize: typography.fontSize.sm,
                  color: colors.text.secondary,
                }}
              >
                ({product.reviewCount})
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p
          style={{
            fontFamily: typography.fontFamily.sans,
            fontSize: typography.fontSize.sm,
            fontWeight: typography.fontWeight.regular,
            color: colors.text.secondary,
            lineHeight: typography.lineHeight.normal,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </p>

        {/* Price */}
        <div
          style={{
            fontFamily: typography.fontFamily.sans,
            fontSize: typography.fontSize.xl,
            fontWeight: typography.fontWeight.bold,
            color: colors.primary[500],
            marginTop: spacing.xs,
          }}
        >
          {formatPrice(product.price, product.currency)}
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div
            role="status"
            style={{
              fontSize: typography.fontSize.sm,
              color: "#dc2626",
              fontWeight: typography.fontWeight.medium,
            }}
          >
            Out of Stock
          </div>
        )}
      </div>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          gap: spacing.sm,
          marginTop: "auto",
        }}
      >
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          style={{
            flex: 1,
            fontFamily: typography.fontFamily.sans,
            fontSize: typography.fontSize.base,
            fontWeight: typography.fontWeight.medium,
            color: colors.text.inverse,
            backgroundColor: product.inStock
              ? colors.primary[500]
              : colors.border.default,
            border: "none",
            borderRadius: borderRadius.md,
            padding: `${spacing.md} ${spacing.lg}`,
            cursor: product.inStock ? "pointer" : "not-allowed",
            transition: "background-color 0.2s ease",
            minHeight: "44px",
          }}
          onMouseEnter={(e) => {
            if (product.inStock) {
              e.currentTarget.style.backgroundColor = colors.primary[600];
            }
          }}
          onMouseLeave={(e) => {
            if (product.inStock) {
              e.currentTarget.style.backgroundColor = colors.primary[500];
            }
          }}
          onFocus={(e) => {
            e.currentTarget.style.outline = `2px solid ${colors.border.focus}`;
            e.currentTarget.style.outlineOffset = "2px";
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = "none";
          }}
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>

        <button
          onClick={handleViewDetails}
          style={{
            fontFamily: typography.fontFamily.sans,
            fontSize: typography.fontSize.base,
            fontWeight: typography.fontWeight.medium,
            color: colors.primary[500],
            backgroundColor: "transparent",
            border: `2px solid ${colors.primary[500]}`,
            borderRadius: borderRadius.md,
            padding: `${spacing.md} ${spacing.lg}`,
            cursor: "pointer",
            transition: "background-color 0.2s ease, color 0.2s ease",
            minHeight: "44px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.state.hover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
          onFocus={(e) => {
            e.currentTarget.style.outline = `2px solid ${colors.border.focus}`;
            e.currentTarget.style.outlineOffset = "2px";
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = "none";
          }}
          aria-label={`View details for ${product.title}`}
        >
          Details
        </button>
      </div>
    </article>
  );
};
```

## Step 4: Create Styled Version (CSS-in-JS)

For production, you might prefer styled-components or CSS modules:

```tsx
// ProductCard.styled.tsx
import styled from "styled-components";
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} from "./design-tokens";

export const Card = styled.article`
  width: 320px;
  background-color: ${colors.background.primary};
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.lg};
  padding: ${spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${borderRadius.md};
  overflow: hidden;
  background-color: ${colors.background.secondary};
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

export const Title = styled.h3`
  font-family: ${typography.fontFamily.sans};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text.primary};
  line-height: ${typography.lineHeight.tight};
  margin: 0;
`;

export const Description = styled.p`
  font-family: ${typography.fontFamily.sans};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.regular};
  color: ${colors.text.secondary};
  line-height: ${typography.lineHeight.normal};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Price = styled.div`
  font-family: ${typography.fontFamily.sans};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.primary[500]};
  margin-top: ${spacing.xs};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${spacing.sm};
  margin-top: auto;
`;

export const PrimaryButton = styled.button<{ disabled?: boolean }>`
  flex: 1;
  font-family: ${typography.fontFamily.sans};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.text.inverse};
  background-color: ${(props) =>
    props.disabled ? colors.border.default : colors.primary[500]};
  border: none;
  border-radius: ${borderRadius.md};
  padding: ${spacing.md} ${spacing.lg};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;
  min-height: 44px;

  &:hover:not(:disabled) {
    background-color: ${colors.primary[600]};
  }

  &:focus {
    outline: 2px solid ${colors.border.focus};
    outline-offset: 2px;
  }
`;

export const SecondaryButton = styled.button`
  font-family: ${typography.fontFamily.sans};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.primary[500]};
  background-color: transparent;
  border: 2px solid ${colors.primary[500]};
  border-radius: ${borderRadius.md};
  padding: ${spacing.md} ${spacing.lg};
  cursor: pointer;
  transition: background-color 0.2s ease;
  min-height: 44px;

  &:hover {
    background-color: ${colors.state.hover};
  }

  &:focus {
    outline: 2px solid ${colors.border.focus};
    outline-offset: 2px;
  }
`;
```

## Step 5: Usage Example

```tsx
// App.tsx
import React from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "./types";

const sampleProduct: Product = {
  id: "prod-001",
  title: "Wireless Headphones",
  description:
    "Premium noise-cancelling headphones with 30-hour battery life and superior sound quality.",
  price: 299.99,
  currency: "USD",
  imageUrl: "/images/headphones.jpg",
  imageAlt: "Black wireless headphones with cushioned ear cups",
  inStock: true,
  rating: 4.5,
  reviewCount: 1234,
};

export default function App() {
  const handleAddToCart = (productId: string) => {
    console.log("Added to cart:", productId);
    // Implement cart logic
  };

  const handleViewDetails = (productId: string) => {
    console.log("View details:", productId);
    // Navigate to product details page
  };

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <ProductCard
        product={sampleProduct}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />

      <ProductCard
        product={{
          ...sampleProduct,
          id: "prod-002",
          title: "Smart Watch",
          description:
            "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.",
          price: 399.99,
          inStock: false,
        }}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
}
```

## Design-to-Code Mapping Checklist

- [x] Extract all colors from Figma and create color tokens
- [x] Extract spacing values and create spacing scale
- [x] Extract typography (font family, sizes, weights) and create type tokens
- [x] Extract border radius values
- [x] Extract shadow values
- [x] Map Figma component structure to React component hierarchy
- [x] Implement hover and focus states from Figma prototype
- [x] Add accessibility attributes (ARIA labels, roles)
- [x] Ensure keyboard navigation support
- [x] Add proper semantic HTML (article, h3, button)
- [x] Implement responsive behavior if specified in Figma
- [x] Add loading states for images
- [x] Implement disabled states for out-of-stock items
- [x] Add proper TypeScript types
- [x] Ensure minimum touch target sizes (44x44px)

## Accessibility Features Added

1. **Semantic HTML**: Uses `<article>`, `<h3>`, `<button>` elements
2. **ARIA Labels**: Descriptive labels for buttons and rating
3. **Alt Text**: Descriptive alt text for product image
4. **Keyboard Navigation**: All interactive elements are keyboard accessible
5. **Focus Indicators**: Clear 2px outline on focus
6. **Status Messages**: "Out of Stock" uses `role="status"`
7. **Touch Targets**: Buttons meet 44x44px minimum size
8. **Color Contrast**: All text meets WCAG AA standards (4.5:1 ratio)
9. **Disabled State**: Proper disabled attribute and cursor
10. **Loading**: Lazy loading for images

## Maintaining Design-Code Consistency

### Using Figma Tokens Plugin

1. Install Figma Tokens plugin in Figma
2. Export tokens as JSON
3. Transform JSON to TypeScript/CSS variables
4. Import tokens in your components

### Automated Sync Workflow

```bash
# Install Figma API client
npm install figma-api

# Create sync script
node scripts/sync-design-tokens.js

# Run on CI/CD pipeline
npm run sync-tokens
```

### Version Control

- Commit design tokens to repository
- Tag releases when design system updates
- Document breaking changes in CHANGELOG
- Use semantic versioning for design system

## Testing the Component

```tsx
// ProductCard.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import { Product } from "./types";

const mockProduct: Product = {
  id: "test-001",
  title: "Test Product",
  description: "Test description",
  price: 99.99,
  currency: "USD",
  imageUrl: "/test.jpg",
  imageAlt: "Test image",
  inStock: true,
};

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
  });

  it("calls onAddToCart when button is clicked", () => {
    const handleAddToCart = jest.fn();
    render(<ProductCard product={mockProduct} onAddToCart={handleAddToCart} />);

    fireEvent.click(screen.getByLabelText(/add.*to cart/i));
    expect(handleAddToCart).toHaveBeenCalledWith("test-001");
  });

  it("disables add to cart button when out of stock", () => {
    const outOfStockProduct = { ...mockProduct, inStock: false };
    render(<ProductCard product={outOfStockProduct} />);

    const button = screen.getByLabelText(/add.*to cart/i);
    expect(button).toBeDisabled();
  });

  it("is keyboard accessible", () => {
    render(<ProductCard product={mockProduct} />);

    const addButton = screen.getByLabelText(/add.*to cart/i);
    addButton.focus();
    expect(addButton).toHaveFocus();
  });
});
```

## Best Practices Summary

1. **Always extract design tokens first** - Don't hardcode values
2. **Use TypeScript** - Type safety prevents errors
3. **Add accessibility from the start** - Don't retrofit later
4. **Test with real data** - Use realistic content lengths
5. **Document deviations** - Note any differences from Figma design
6. **Version your design system** - Track changes over time
7. **Automate where possible** - Use Figma API for token sync
8. **Review with designers** - Ensure implementation matches intent
9. **Test on real devices** - Don't rely only on browser DevTools
10. **Keep components flexible** - Allow for variations and customization
